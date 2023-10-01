const irregularVerbs = [
    {
        infinitive: "beat",
        pastSimple: "beat",
        pastParticiple: "beaten"
    },
    {
        infinitive: "become",
        pastSimple: "became",
        pastParticiple: "become"
    },
    {
        infinitive: "bend",
        pastSimple: "bent",
        pastParticiple: "bent"
    },
    {
        infinitive: "bet",
        pastSimple: "bet",
        pastParticiple: "bet"
    },
    {
        infinitive: "bite",
        pastSimple: "bit",
        pastParticiple: "bitten"
    },
    {
        infinitive: "blow",
        pastSimple: "blew",
        pastParticiple: "blown"
    },
    {
        infinitive: "break",
        pastSimple: "broke",
        pastParticiple: "broken"
    },
    {
        infinitive: "bring",
        pastSimple: "brought",
        pastParticiple: "brought"
    },
    {
        infinitive: "broadcast",
        pastSimple: "broadcast",
        pastParticiple: "broadcast"
    },
    {
        infinitive: "build",
        pastSimple: "built",
        pastParticiple: "built"
    },
    {
        infinitive: "burn",
        pastSimple: "burnt",
        pastParticiple: "burnt"
    },
    {
        infinitive: "burst",
        pastSimple: "burst",
        pastParticiple: "burst"
    },
    {
        infinitive: "cost",
        pastSimple: "cost",
        pastParticiple: "cost"
    },
    {
        infinitive: "cut",
        pastSimple: "cut",
        pastParticiple: "cut"
    },
    {
        infinitive: "deal",
        pastSimple: "dealt",
        pastParticiple: "dealt"
    },
    {
        infinitive: "dig",
        pastSimple: "dug",
        pastParticiple: "dug"
    },
    {
        infinitive: "dream",
        pastSimple: "dreamt",
        pastParticiple: "dreamt"
    },
    {
        infinitive: "fall",
        pastSimple: "fell",
        pastParticiple: "fallen"
    },
    {
        infinitive: "feed",
        pastSimple: "fed",
        pastParticiple: "fed"
    },
    {
        infinitive: "fight",
        pastSimple: "fought",
        pastParticiple: "fought"
    },
    {
        infinitive: "forget",
        pastSimple: "forgot",
        pastParticiple: "forgotten"
    },
    {
        infinitive: "forgive",
        pastSimple: "forgave",
        pastParticiple: "forgiven"
    },
    {
        infinitive: "freeze",
        pastSimple: "froze",
        pastParticiple: "frozen"
    },
    {
        infinitive: "grow",
        pastSimple: "grew",
        pastParticiple: "grown"
    },
    {
        infinitive: "hang",
        pastSimple: "hung",
        pastParticiple: "hung"
    },
    {
        infinitive: "hide",
        pastSimple: "hid",
        pastParticiple: "hidden"
    },
    {
        infinitive: "hit",
        pastSimple: "hit",
        pastParticiple: "hit"
    },
    {
        infinitive: "hold",
        pastSimple: "held",
        pastParticiple: "held"
    },
    {
        infinitive: "hurt",
        pastSimple: "hurt",
        pastParticiple: "hurt"
    },
    {
        infinitive: "keep",
        pastSimple: "kept",
        pastParticiple: "kept"
    },
    {
        infinitive: "kneel",
        pastSimple: "knelt",
        pastParticiple: "knelt"
    },
    {
        infinitive: "lay",
        pastSimple: "laid",
        pastParticiple: "laid"
    },
    {
        infinitive: "lead",
        pastSimple: "led",
        pastParticiple: "led"
    },
    {
        infinitive: "lend",
        pastSimple: "lent",
        pastParticiple: "lent"
    },
    {
        infinitive: "let",
        pastSimple: "let",
        pastParticiple: "let"
    },
    {
        infinitive: "lie",
        pastSimple: "lay",
        pastParticiple: "lain"
    },
    {
        infinitive: "light",
        pastSimple: "lit",
        pastParticiple: "lit"
    },
    {
        infinitive: "lose",
        pastSimple: "lost",
        pastParticiple: "lost"
    },
    {
        infinitive: "mean",
        pastSimple: "meant",
        pastParticiple: "meant"
    },
    {
        infinitive: "misunderstand",
        pastSimple: "misunderstood",
        pastParticiple: "misunderstood"
    },
    {
        infinitive: "must",
        pastSimple: "had to",
        pastParticiple: "had to"
    },
    {
        infinitive: "ring",
        pastSimple: "rang",
        pastParticiple: "rung"
    },
    {
        infinitive: "rise",
        pastSimple: "rose",
        pastParticiple: "risen"
    },
    {
        infinitive: "sell",
        pastSimple: "sold",
        pastParticiple: "sold"
    },
    {
        infinitive: "set",
        pastSimple: "set",
        pastParticiple: "set"
    },
    {
        infinitive: "shake",
        pastSimple: "shook",
        pastParticiple: "shaken"
    },
    {
        infinitive: "shine",
        pastSimple: "shone",
        pastParticiple: "shone"
    },
    {
        infinitive: "shoot",
        pastSimple: "shot",
        pastParticiple: "shot"
    },
    {
        infinitive: "shrink",
        pastSimple: "shrank",
        pastParticiple: "shrunk"
    },
    {
        infinitive: "shut",
        pastSimple: "shut",
        pastParticiple: "shut"
    },
    {
        infinitive: "sink",
        pastSimple: "sank",
        pastParticiple: "sunk"
    },
    {
        infinitive: "slide",
        pastSimple: "slid",
        pastParticiple: "slid"
    },
    {
        infinitive: "smell",
        pastSimple: "smelt",
        pastParticiple: "smelt"
    },
    {
        infinitive: "spell",
        pastSimple: "spelt",
        pastParticiple: "spelt"
    },
    {
        infinitive: "spend",
        pastSimple: "spent",
        pastParticiple: "spent"
    },
    {
        infinitive: "spill",
        pastSimple: "spilt",
        pastParticiple: "spilt"
    },
    {
        infinitive: "split",
        pastSimple: "split",
        pastParticiple: "split"
    },
    {
        infinitive: "spoil",
        pastSimple: "spoilt",
        pastParticiple: "spoilt"
    },
    {
        infinitive: "spread",
        pastSimple: "spread",
        pastParticiple: "spread"
    },
    {
        infinitive: "stand",
        pastSimple: "stood",
        pastParticiple: "stood"
    },
    {
        infinitive: "steal",
        pastSimple: "stole",
        pastParticiple: "stolen"
    },
    {
        infinitive: "stick",
        pastSimple: "stuck",
        pastParticiple: "stuck"
    },
    {
        infinitive: "swear",
        pastSimple: "swore",
        pastParticiple: "sworn"
    },
    {
        infinitive: "tear",
        pastSimple: "tore",
        pastParticiple: "torn"
    },
    {
        infinitive: "throw",
        pastSimple: "threw",
        pastParticiple: "thrown"
    },
    {
        infinitive: "wake",
        pastSimple: "woke",
        pastParticiple: "woken"
    }
    // ... Agrega el resto de los verbos aquí ...
];


// Obtener elementos del DOM
const verbTable = document.getElementById("verbTable");
const easyButton = document.getElementById("easy");
const intermediateButton = document.getElementById("intermediate");
const hardButton = document.getElementById("hard");
const searchInput = document.getElementById("searchInput");

// Función para cargar los verbos en la tabla
function loadVerbs() {
    verbTable.innerHTML = "<tr><th>Infinitive</th><th>Past Simple</th><th>Past Participle</th></tr>";

    irregularVerbs.forEach((verb) => {
        const { infinitive, pastSimple, pastParticiple } = verb;
        const row = `<tr><td>${infinitive}</td><td>${pastSimple}</td><td>${pastParticiple}</td></tr>`;
        verbTable.innerHTML += row;
    });
}

// Función para obtener una conjugación aleatoria de un verbo
function getRandomConjugation(verb) {
    const randomIndex = Math.floor(Math.random() * 3); // 0, 1 o 2
    return verb[randomIndex];
}

// Función para manejar el botón "Easy"
easyButton.addEventListener("click", () => {
    loadVerbs();
    verbTable.querySelectorAll("tr").forEach((row, rowIndex) => {
        if (rowIndex === 0) {
            // Saltar la fila de encabezado
            return;
        }

        const verbsInRow = row.querySelectorAll("td");
        const randomIndex1 = Math.floor(Math.random() * 3); // 0, 1 o 2
        let randomIndex2;

        do {
            randomIndex2 = Math.floor(Math.random() * 3); // 0, 1 o 2
        } while (randomIndex2 === randomIndex1); // Asegura que sean diferentes

        verbsInRow.forEach((td, index) => {
            if (index === randomIndex1 || index === randomIndex2) {
                const verb = td.textContent;
                const conjugations = irregularVerbs.find((v) => v.infinitive === verb);

                if (conjugations) {
                    if (index === 0) {
                        td.textContent = conjugations.infinitive;
                    } else if (index === 1) {
                        td.textContent = conjugations.pastSimple;
                    } else {
                        td.textContent = conjugations.pastParticiple;
                    }
                }
            } else {
                // Crear un elemento de entrada de texto para las casillas en blanco
                const inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.classList.add("conjugation-input");
                td.innerHTML = ""; // Limpiar el contenido del td
                td.appendChild(inputElement); // Agregar el elemento de entrada de texto

                // Agregar un evento para comprobar la respuesta del usuario
                inputElement.addEventListener("blur", () => {
                    const verb = td.parentElement.querySelector("td:first-child").textContent;
                    const conjugations = irregularVerbs.find((v) => v.infinitive === verb);

                    if (conjugations) {
                        const correctConjugation = index === 1 ? conjugations.pastSimple : conjugations.pastParticiple;
                        const userConjugation = inputElement.value.trim();

                        // Verificar si la respuesta del usuario coincide con la conjugación correcta
                        if (userConjugation === correctConjugation) {
                            td.style.backgroundColor = "green"; // Correcto (fondo verde)
                        } else {
                            td.style.backgroundColor = "red"; // Incorrecto (fondo rojo)
                        }
                    }
                });
            }
        });
    });
});

// Función para manejar el botón "Intermediate"
intermediateButton.addEventListener("click", () => {
    loadVerbs();
    verbTable.querySelectorAll("tr").forEach((row, rowIndex) => {
        if (rowIndex === 0) {
            // Saltar la fila de encabezado
            return;
        }

        const verbsInRow = row.querySelectorAll("td");

        verbsInRow.forEach((td, index) => {
            if (index === 0) {
                const verb = td.textContent;
                const conjugations = irregularVerbs.find((v) => v.infinitive === verb);

                if (conjugations) {
                    td.textContent = conjugations.infinitive;
                }
            } else {
                const inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.classList.add("conjugation-input");
                td.innerHTML = "";
                td.appendChild(inputElement);

                let answeredCorrectly = false;

                // Agregar un evento para comprobar la respuesta del usuario
                inputElement.addEventListener("blur", () => {
                    const verb = td.parentElement.querySelector("td:first-child").textContent;
                    const conjugations = irregularVerbs.find((v) => v.infinitive === verb);

                    if (conjugations) {
                        const correctConjugation = index === 1 ? conjugations.pastSimple : conjugations.pastParticiple;
                        const userConjugation = inputElement.value.trim();

                        // Verificar si la respuesta del usuario coincide con la conjugación correcta
                        if (userConjugation === correctConjugation) {
                            td.style.backgroundColor = "green"; // Correcto (fondo verde)
                        } else {
                            td.style.backgroundColor = "red"; // Incorrecto (fondo rojo)
                        }
                    }
                });
            }
        });
    });
});


// Función para manejar el botón "Hard"
hardButton.addEventListener("click", () => {
   loadVerbs();

   verbTable.querySelectorAll("tr").forEach((row, rowIndex) => {
       if (rowIndex === 0) {
           // Saltar la fila de encabezado
           return;
       }

       const conjugationIndex = Math.floor(Math.random() * 3); // 0, 1 o 2
       const verbsInRow = row.querySelectorAll("td");

       verbsInRow.forEach((td, index) => {
           if (index === conjugationIndex) {
               const verb = td.parentElement.querySelector("td:first-child").textContent;
               const conjugations = irregularVerbs.find((v) => v.infinitive === verb);

               if (conjugations) {
                   const conjugation = index === 0 ? conjugations.infinitive : (index === 1 ? conjugations.pastSimple : conjugations.pastParticiple);
                   td.textContent = conjugation;
               }
           } else {
               // Crear un elemento de entrada de texto para las casillas en blanco
               const inputElement = document.createElement("input");
               inputElement.type = "text";
               inputElement.classList.add("conjugation-input");
               td.innerHTML = ""; // Limpiar el contenido del td
               td.appendChild(inputElement); // Agregar el elemento de entrada de texto

               // Agregar un evento para comprobar la respuesta del usuario
                inputElement.addEventListener("blur", () => {
                    const verb = td.parentElement.querySelector("td:first-child").textContent;
                    const conjugations = irregularVerbs.find((v) => v.infinitive === verb);

                    if (conjugations) {
                        const correctConjugation = index === 1 ? conjugations.pastSimple : conjugations.pastParticiple;
                        const userConjugation = inputElement.value.trim();

                        // Verificar si la respuesta del usuario coincide con la conjugación correcta
                        if (userConjugation === correctConjugation) {
                            td.style.backgroundColor = "green"; // Correcto (fondo verde)
                        } else {
                            td.style.backgroundColor = "red"; // Incorrecto (fondo rojo)
                        }
                    }
                });
           }
       });
   });
});

// Cargar los verbos al cargar la página
loadVerbs();
