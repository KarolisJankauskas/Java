function skaiciuSuma() {
    let lyginiuSuma = 0;
    let nelyginiuSuma = 0;

    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            lyginiuSuma += i; 
        } else {
            nelyginiuSuma += i;
        }
    }

    return {
        lyginiai: lyginiuSuma,
        nelyginiai: nelyginiuSuma
    };
}


const sumos = skaiciuSuma();
console.log(`Lyginių skaičių suma: ${sumos.lyginiai}`);
console.log(`Nelyginių skaičių suma: ${sumos.nelyginiai}`);