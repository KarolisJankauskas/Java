const tempInCelcius = prompt("Celcius to Fahrenheit")



function celciusToFahrenheit(temp) {

    const fahrenheit = (temp*(9/5)+32);
    return fahrenheit
}
let tempInFahrenheit = celciusToFahrenheit(tempInCelcius);


console.log(tempInFahrenheit)

