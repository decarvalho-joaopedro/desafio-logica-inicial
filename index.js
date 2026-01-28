let heroName = "John";
let heroXP = 8000;
let heroLevel = "";

switch (true) {

  case heroXP <= 1000:
    heroLevel = "Ferro";
    break;
  case heroXP > 1000 && heroXP <= 2000:
    heroLevel = "Bronze";
    break;
  case heroXP > 2000 && heroXP <= 5000:
    heroLevel = "Prata";
    break;
  case heroXP > 5000 && heroXP <= 6000:
    heroLevel = "Ouro";
    break;
  case heroXP > 6000 && heroXP <= 7000:
    heroLevel = "Platina";
    break;
  case heroXP > 7000 && heroXP <= 8000:
    heroLevel = "Diamante";
    break;
  case heroXP > 8000 && heroXP <= 9000:
    heroLevel = "Ascendente";
    break;
  case heroXP > 9000 && heroXP <= 10000:
    heroLevel = "Imortal";
    break;
  case heroXP > 10000:
    heroLevel = "Radiante";
    break;
  default:
    heroLevel = "Inexistente";

}

console.log(`O herói ${heroName} está no nível ${heroLevel}.`);