let but_som = document.querySelector('#but-som');
let but_sub = document.querySelector('#but-sub');
let but_div = document.querySelector('#but-div');
let but_mult = document.querySelector('#but-mult');
let resultado = document.querySelector('#result');

let val_1 = document.querySelector('#val1');
let val_2 = document.querySelector('#val2');

but_som.addEventListener('click', () => {
    if (val_1.value === "" || val_2.value === "") {
        window.alert('Digite um numero');
    } else {
        resultado.innerHTML = (parseInt(val_1.value) + parseInt(val_2.value));
    }
});

but_sub.addEventListener('click', () => {
    if (val_1.value === "" || val_2.value === "") {
        window.alert('Digite um numero');
    } else { 
        resultado.innerHTML = (parseInt(val_1.value) - parseInt(val_2.value));
    }
});

but_div.addEventListener('click', () => {
    if (val_1.value === "" || val_2.value === "") {
        window.alert('Digite um numero');
    } else { 
        resultado.innerHTML = (parseInt(val_1.value) / parseInt(val_2.value));
    }
});

but_mult.addEventListener('click', () => {
    if (val_1.value === "" || val_2.value === "") { 
        window.alert('Digite um numero');
    } else {
        resultado.innerHTML = (parseInt(val_1.value) * parseInt(val_2.value));
    }
});



