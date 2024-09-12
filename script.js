const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const langSelect = document.getElementById("language-select");

// Define your jokes
const jokes = {
  en: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "How does a penguin build its house? Igloos it together.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why did the math book look sad? It had too many problems.",
    "What do you call a bear with no teeth? A gummy bear!",
  ],
  es: [
    "¿Por qué los científicos no confían en los átomos? ¡Porque lo inventan todo!",
    "¿Por qué ganó el espantapájaros un premio? ¡Porque era sobresaliente en su campo!",
    "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
    "¿Cuál es el colmo de un electricista? No encontrar su corriente de trabajo.",
    "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
  ],
  fra: [
      "Pourquoi les plongeurs plongent-ils toujours en arrière et jamais en avant ? Parce que sinon ils tombent dans le bateau.",
      "Que fait un électricien quand il prend sa retraite ? Il se met au courant des nouvelles.",
      "Pourquoi les oiseaux ne jouent-ils pas au poker ? Parce qu’ils ont peur du chat.",
      "Quel est le comble pour un électricien ? De ne pas être au courant.",
      "Pourquoi les abeilles ont-elles des cheveux collants ? Parce qu’elles utilisent du miel pour les coiffer."


  ],
  pol: [
    "Dlaczego komputerowi nigdy nie jest zimno? Bo zawsze ma Windows.",
    "Jak nazywa się kot, który pracuje na komputerze? Klawiaturnik.",
    "Co mówi jeden policjant do drugiego? „Trzymaj się w grupie!”",
    "Dlaczego książki są takie mądre? Bo mają dużo kartek.",
    "Jakie są ulubione napoje kosmonautów? Orbity.",
  ],
  bos: [
    "Zašto je knjiga uvijek umorna? Jer ima previše stranica.",
    "Šta kaže jedan telefon drugom telefonu kad se sretnu? “Pozdrav, dugme!”",
    "Kako se zove pčela koja je na odmoru? Odmarica.",
    "Šta radi riba kad joj je dosadno? Peca se sama.",
    "Zašto su dugmići na košulji uvijek sretni? Zato što su uvijek u društvu.",
  ],
  ger: [
    "Warum können Geister so schlecht lügen? Weil man durch sie hindurchsehen kann.",
    "Wie nennt man einen Bumerang, der nicht zurückkommt? Stock.",
    "Warum können Geister keine Lügen erzählen? Weil man durch sie hindurchsehen kann.",
    "Was macht ein Keks unter einem Baum? Krümel.",
    "Warum sind Mathebücher so schlecht im Schach? Weil sie immer nur Probleme haben.",
  ],
  ita: [
    "Perché il computer non si sente bene? Perché ha un virus.",
    "Cosa fa una cipolla al cinema? Piange.",
    "Come si chiama un cane che fa magie? Un labracadabrador.",
    "Cosa fa un matematico in spiaggia? Conta i granelli di sabbia.",
    "Perché i gatti non giocano a poker? Perché c'è troppo rischio di bluffare.",
  ],
  por: [
    "Por que o livro de matemática está estressado? Porque tem muitos problemas.",
    "O que o pato falou para a pata? Vem quá.",
    "Qual é o café mais forte do mundo? O café expresso.",
    "O que faz um astronauta no seu tempo livre? Ele passeia pelo espaço.",
    "Por que o peixe é tão inteligente? Porque ele vive no colégio (a água).",
  ]


};

function getRandomJoke(language) {
  const jokesInLanguage = jokes[language] || jokes['en']; // Default to English if language not found
  const randomIndex = Math.floor(Math.random() * jokesInLanguage.length);
  return jokesInLanguage[randomIndex];
}

function getJoke() {
  jokeContainer.classList.remove("fade");
  const selectedLanguage = langSelect.value; // Get the selected language
  const joke = getRandomJoke(selectedLanguage); // Get a random joke in the selected language
  jokeContainer.textContent = joke;
  jokeContainer.classList.add("fade");
}

btn.addEventListener("click", getJoke);
getJoke(); // Initial joke on page load

  













