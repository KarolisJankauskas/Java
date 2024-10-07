function askForCoin() {
    let coins = 0;

    while (true) {
        console.log(`Turite ${coins} monetu.`);
        
        let answer = prompt("Ar noretumet monetos? (Taip/Ne)");

        if (answer.toLowerCase() === "taip") {
            coins++;
            console.log(`Jus turite ${coins} moneta/as.`);
        } else if (answer.toLowerCase() === "ne") {
            console.log("Gerai, atsisakete monetos.");
            break;
        } else {
            console.log("Prasome atsakyti 'Taip' arba 'Ne'.");
        }
    }
}

askForCoin();
