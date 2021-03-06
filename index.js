const clearOutput = () => {
    document.getElementById('output-display').innerHTML = "0";
};

const backSpace = () => {
    let select = document.getElementById('output-display').innerHTML;

    select.length <= 1 ? document.getElementById('output-display').innerHTML = '0' : document.getElementById('output-display').innerHTML = select.substring(0, select.length - 1);
};

const percent = () => {
    const number = document.getElementById('output-display').innerHTML;
    
    try {
        if( number == '0' || operatorIsValid() ) throw Error('Masukin dulu beb angkanya :(')

        const percentage = number / 100;

        const history = addToHistory({getNumber: number + '%', result: percentage});

        document.getElementById('history').innerHTML += history
        document.getElementById('output-display').innerHTML = percentage;
    } catch (error) {
        // alert(error.message);
        swal({
            title: "Wah ada error!",
            text: error.message.includes('beb') ? error.message : "Syntaxnya ada yang error beb!",
            icon: "error",
            button: "OK",
            timer: 3000,
          });
        document.getElementById('output-display').innerHTML = '0';
    }
};

const addToDisplay = (item) => {
    try {
        if( document.getElementById('output-display').innerHTML == '0' && item == '.' ) {
            document.getElementById('output-display').innerHTML += item;    
        } else {
            removeZero();
            document.getElementById('output-display').innerHTML += item;
        }
    } catch (error) {
        
    }
};

// menghapus angka NOL sebelum menjalankan operasi
const removeZero = () => {
    let value = document.getElementById('output-display').innerHTML;
    if( value == '0' ) document.getElementById('output-display').innerHTML = '';
};

const finish = () => {
    try {
        const getNumber = document.getElementById('output-display').innerHTML;

        if( getNumber === '0' || operatorIsValid() ) throw Error('Di cek lagi beb angkanya :(');
        
        const formattedNumber = getNumber.replace('x', '*');

        const result = eval(formattedNumber);       //--> EVAL IS EVIL NGUEHEHEHEHE

        const history = addToHistory({getNumber, result});

        document.getElementById('history').innerHTML += history;
        document.getElementById('output-display').innerHTML = result;
    } catch (error) {
        // alert(error.message);
        swal({
            title: "Wah ada error!",
            text: error.message.includes('beb') ? error.message : "Syntaxnya ada yang error beb!",
            icon: "error",
            button: "OK",
            timer: 3000
          });
        document.getElementById('output-display').innerHTML = '0';
    }
};

const operatorIsValid = () => {
    let check;  
    
    const getNumber = document.getElementById('output-display').innerHTML;

    const listOperator = ['+', 'x', '/', '%'];

    listOperator.includes(getNumber[0]) ? check = true : check = false ;

    return check;
};

const addToHistory = ({getNumber, result}) => {
    return `<p class="number">${getNumber}</p><p class="result">${result}</p><hr>`;
};