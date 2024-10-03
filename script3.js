const frogSize = 100;

const frogCount = prompt("Kiek varliu norima stebeti")

let frogAllSize = ((frogSize * frogCount)/frogSize)

let unfoldingTime = prompt("Kiek sveria viena varle?")

// if (dropTime<unfoldingTime){
//     console.log("Parasiutas nespes issiskleisti")
// }
// else {console.log("Parasiutas spes issiskleisti")}

if (frogCount && unfoldingTime) {
    let tripResult =
        frogAllSize > unfoldingTime
            ? "Pakanka"
            : "nepakanka";
    console.log(tripResult);
} else {
    alert("Suveskite duomenis!")


}

// console.log(height);


// let tripResult =
// dropTime < unfoldingTime
// ? "Parasiutas nespes issiskleisti"
// : "Parasiutas spes isiskleisti";
// console.log(tripResult)