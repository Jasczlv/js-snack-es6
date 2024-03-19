// *SNACK 1*
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo (“Tavolo Vip”) e la lista degli invitati in ordine di posto:
// [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo,
// nome dell’ospite,
// posto occupato.
// Generiamo e stampiamo in console la lista per i segnaposto.
// esempio:
// {
//   nomeTavolo: 'Tavolo VIP',
//   nomeOspite: 'Brad Pitt',
//   posto: 1
// }

const arrayOspiti = [
  {
    nome: "Brad Pitt",
    nomeTavolo: "Tavolo Vip",
    posto: "1",
  },
  {
    nome: "Johnny Depp",
    nomeTavolo: "Tavolo Vip",
    posto: "2",
  },
  {
    nome: "Lady Gaga",
    nomeTavolo: "Tavolo Vip",
    posto: "3",
  },
  {
    nome: "Cristiano Ronaldo",
    nomeTavolo: "Tavolo Vip",
    posto: "4",
  },
  {
    nome: "Georgina Rodriguez",
    nomeTavolo: "Tavolo Vip",
    posto: "5",
  },
  {
    nome: "Chiara Ferragni",
    nomeTavolo: "Tavolo Vip",
    posto: "6",
  },
  {
    nome: "Fedez",
    nomeTavolo: "Tavolo Vip",
    posto: "7",
  },
  {
    nome: "George Clooney",
    nomeTavolo: "Tavolo Vip",
    posto: "8",
  },
  {
    nome: "Amal Clooney",
    nomeTavolo: "Tavolo Vip",
    posto: "9",
  },
  {
    nome: "Amal Clooney",
    nomeTavolo: "Tavolo Vip",
    posto: "10",
  },
  {
    nome: "Maneskin",
    nomeTavolo: "Tavolo Vip",
    posto: "11",
  },
];

for (let i = 0; i < arrayOspiti.length; i++) {
  console.log(`nome: ${arrayOspiti[i].nome}, posto: ${arrayOspiti[i].posto}`);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// *SNACK 2*
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
// 1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
// ES (Marco della Rovere => MARCO DELLA ROVERE);
// 2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
// 3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
// Questo è l’elenco degli studenti:
// Id   Name                    Grades
// 213  Marco della Rovere      78
// 110  Paola Cortellessa       96
// 250  Andrea Mantegna 	      48
// 145  Gaia Borromini          74
// 196  Luigi Grimaldello 	  68
// 102  Piero della Francesca   50
// 120  Francesca da Polenta    84

const arrayStudenti = [
  {
    nome: "Marco della Rovere",
    id: "213",
    voto: "78",
  },
  {
    nome: "Paola Cortellessa",
    id: "110",
    voto: "96",
  },
  {
    nome: "Andrea Mantegna ",
    id: "250",
    voto: "48",
  },
  {
    nome: "Gaia Borromini",
    id: "145",
    voto: "74",
  },
  {
    nome: "Luigi Grimaldello",
    id: "196",
    voto: "68",
  },
  {
    nome: "Piero della Francesca",
    id: "102",
    voto: "50",
  },
  {
    nome: "Francesca da Polenta",
    id: "120",
    voto: "84",
  },
];

const listaMaiusc = [];
const listaVoti = [];
const idSize = [];

for (let i = 0; i < arrayStudenti.length; i++) {
  let nomeMaiusc = arrayStudenti[i].nome.toUpperCase();
  listaMaiusc.push(nomeMaiusc);
  let voto = parseInt(arrayStudenti[i].voto);
  if (voto >= 70) {
    //lista voto >= 70
    listaVoti.push(voto);
  }
  let idMaggiore = parseInt(arrayStudenti[i].id);
  if (idMaggiore >= 120 && voto >= 70) {
    //lista id e voto >= di 120 e 70
    idSize.push(nomeMaiusc + " " + idMaggiore + " voto: " + voto);
  }
}

console.log(listaMaiusc);
console.log(listaVoti);
console.log(idSize);

// for (let i = 0; i < arrayStudenti.length; i++) {
//   let voto = parseInt(arrayStudenti[i].voto);
//   if (voto >= 70) {
//     listaVoti.push(voto);
//   }
// }

// for (let i = 0; i < arrayStudenti.length; i++) {
//   let idMaggiore = parseInt(arrayStudenti[i].id);
//   if (idMaggiore >= 120) {
//     idSize.push(idMaggiore);
//   }
// }
