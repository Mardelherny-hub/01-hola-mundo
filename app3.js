console.log('Inicio del script');

setTimeout(() => {
    console.log('Primer time Out');
}, 5000);

setTimeout(() => {
    console.log('Segundo time Out');
}, 0);

setTimeout(() => {
    console.log('Tercer time Out');
}, 0);

console.log('Fin de script');