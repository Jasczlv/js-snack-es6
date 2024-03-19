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
