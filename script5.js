const ugis = prompt("Ivesk ugi");
const svoris = prompt("Ivesk svori");

const jonasKmi = svoris / ugis ** 2;

console.log(`jono kmi yra ${jonasKmi}`);

const ugis1 = prompt("Ivesk ugi1");
const svoris1 = prompt("Ivesk svori1");

const antanasKmi = svoris1 / ugis1 ** 2;

console.log(`antano kmi1 yra ${antanasKmi}`);

console.log(
  `jono kmi didesnis ${jonasKmi > antanasKmi}`
);
console.log(`antano kmi didesnis ${antanasKmi > jonasKmi}`)