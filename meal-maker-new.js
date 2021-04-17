let  vseobiecti = [];
let salati = [];
let maini = [];
let deserti = [];
let proba;
let proba1;
let proba2;

function Dish(name, type, price) {
    this.name = name;
    this.type = type;
    this.price = price;
  }
  
  let eda0 = new Dish('zesar', 'salat', 4);
  let eda1 = new Dish('shopsk', 'salat', 3);
  let eda2 = new Dish('grecheskii', 'salat', 5);
  let eda3 = new Dish('saslik', 'main', 10);
  let eda4 = new Dish('kebab', 'main', 11);
  let eda5 = new Dish('plov', 'main', 12);
  let eda6 = new Dish('kiwi', 'desert', 2);
  let eda7 = new Dish('icecream', 'desert', 3);
  let eda8 = new Dish('panakota', 'desert', 4);

  vseobiecti.push(eda0, eda1, eda2, eda3, eda4, eda5, eda6, eda7, eda8 );
 
  function pikmenu() {
    for (i=0; i<vseobiecti.length; i++) {
        let itob = vseobiecti[i];
        if (itob.type === 'salat') {
            salati.push(itob);
        }
        else if (itob.type === 'main') {
            maini.push(itob); 
        }
        else if (itob.type === 'desert') {
            deserti.push(itob);
        }
  }
  };

  function randomsalat() {
    const randomIndex = Math.floor(Math.random() * salati.length);
    return proba = salati[randomIndex];
  };

  function randommain() {
    const randomIndex = Math.floor(Math.random() * maini.length);
    return proba1 = maini[randomIndex];
  };

  function randomdesert() {
    const randomIndex = Math.floor(Math.random() * deserti.length);
    return proba2 = deserti[randomIndex];
  };

  pikmenu();
  randomsalat();
  randommain();
  randomdesert();

  let beitrag = proba.price + proba1.price + proba2.price;
  console.log(`Predlagaiu ${proba.name}, ${proba1.name} i ${proba2.name} po zene ${beitrag} euro`);
  