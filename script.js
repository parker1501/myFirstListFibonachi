let listaFibonachi = [0,1];

for (let i = 0; i < 5; i++) {
        let suma = listaFibonachi[listaFibonachi.length - 1] + listaFibonachi[listaFibonachi.length - 2];
        console.log(suma);
        listaFibonachi.push(suma);
        console.log(listaFibonachi);
    }