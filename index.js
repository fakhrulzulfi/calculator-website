const clearOutput = () => {
    document.getElementById('output-display').innerHTML = "0";
};

const backSpace = () => {
    let select = document.getElementById('output-display').innerHTML;

    select.length <= 1 ? document.getElementById('output-display').innerHTML = '0' : document.getElementById('output-display').innerHTML = select.substring(0, select.length - 1);
};

const addToDisplay = (item) => {
    removeZero();
    document.getElementById('output-display').innerHTML += item;
};

// menghapus angka NOL sebelum menjalankan operasi
const removeZero = () => {
    let value = document.getElementById('output-display').innerHTML;
    if( value == '0' ) document.getElementById('output-display').innerHTML = '';
};

const finish = () => {
    const getNumber = document.getElementById('output-display').innerHTML;
    const formattedNumber = getNumber.replace('x', '*');
    const result = eval(formattedNumber);

    const addToData = {
        number: getNumber,
        result
    };

    const history = `<p class="number">${addToData.number}</p><p class="result">${addToData.result}</p><hr>`;

    document.getElementById('history').innerHTML += history;

    document.getElementById('output-display').innerHTML = result;
};
