const acceleration = 9.8;

const height = prompt("Is kokio aukscio aukscio soka parasiutininkas?")

let dropTime = Math.sqrt((2 * height) / acceleration)

let unfoldingTime = prompt("Per kiek laiko issiskleidzia parasiutas?")

// if (dropTime<unfoldingTime){
//     console.log("Parasiutas nespes issiskleisti")
// }
// else {console.log("Parasiutas spes issiskleisti")}

if (height && unfoldingTime) {
    let tripResult =
        dropTime < unfoldingTime
            ? "Parasiutas nespes issiskleisti"
            : "Parasiutas spes isiskleisti";
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