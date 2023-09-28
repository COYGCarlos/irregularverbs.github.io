// Definir una matriz de verbos irregulares (reemplazar con los verbos reales)
const irregularVerbs = [
    ["beat", "beat", "beaten"],
    ["become", "became", "become"],
    ["bend", "bent", "bent"],
    ["bet", "bet", "bet"],
    ["bite", "bit", "bitten"],
    ["blow", "blew", "blown"],
    ["break", "broke", "broken"],
    ["bring", "brought", "brought"],
    ["broadcast", "broadcast", "broadcast"],
    ["build", "built", "built"],
    ["burn", "burnt", "burnt"],
    ["burst", "burst", "burst"],
    ["cost", "cost", "cost"],
    ["cut", "cut", "cut"],
    ["deal", "dealt", "dealt"],
    ["dig", "dug", "dug"],
    ["dream", "dreamt", "dreamt"],
    ["fall", "fell", "fallen"],
    ["feed", "fed", "fed"],
    ["fight", "fought", "fought"],
    ["forget", "forgot", "forgotten"],
    ["forgive", "forgave", "forgiven"],
    ["freeze", "froze", "frozen"],
    ["grow", "grew", "grown"],
    ["hang", "hung", "hung"],
    ["hide", "hid", "hidden"],
    ["hit", "hit", "hit"],
    ["hold", "held", "held"],
    ["hurt", "hurt", "hurt"],
    ["keep", "kept", "kept"],
    ["kneel", "knelt", "knelt"],
    ["lay", "laid", "laid"],
    ["lead", "led", "led"],

    // ---------------------------------

    ["lend", "lent", "lent"],
    ["let", "let", "let"],
    ["lie", "lay", "lain"],
    ["light", "lit", "lit"],
    ["lose", "lost", "lost"],
    ["mean", "meant", "meant"],
    ["misunderstand", "misunderstood", "misunderstood"],
    ["must", "had to", "had to"],
    ["ring", "rang", "rung"],
    ["rise", "rose", "risen"],
    ["sell", "sold", "sold"],
    ["set", "set", "set"],
    ["shake", "shook", "shaken"],
    ["shine", "shone", "shone"],
    ["shoot", "shot", "shot"],
    ["shrink", "shrank", "shrunk"],
    ["shut", "shut", "shut"],
    ["sink", "sank", "sunk"],
    ["slide", "slid", "slid"],
    ["smell", "smelt", "smelt"],
    ["spell", "spelt", "spelt"],
    ["spend", "spent", "spent"],
    ["spill", "spilt", "spilt"],
    ["split", "split", "split"],
    ["spoil", "spoilt", "spoilt"],
    ["spread", "spread", "spread"],
    ["stand", "stood", "stood"],
    ["steal", "stole", "stolen"],
    ["stick", "stuck", "stuck"],
    ["swear", "swore", "sworn"],
    ["tear", "tore", "torn"],
    ["throw", "threw", "thrown"],
    ["wake", "woke", "woken"],


];

// Obtener elementos del DOM
const verbTable = document.getElementById("verbTable");
const easyButton = document.getElementById("easy");
const intermediateButton = document.getElementById("intermediate");
const hardButton = document.getElementById("hard");
const challengeButton = document.getElementById("challenge");
const table = document.querySelector("table");

// Función para cargar los verbos en la tabla
function loadVerbs() {
    verbTable.innerHTML = "<tr><th>Infinitive</th><th>Past Simple</th><th>Past Participle</th></tr>";

    for (const verb of irregularVerbs) {
        const [infinitive, pastSimple, pastParticiple] = verb;
        const row = `<tr><td>${infinitive}</td><td>${pastSimple}</td><td>${pastParticiple}</td></tr>`;
        verbTable.innerHTML += row;
    }
}

// Función para obtener una conjugación aleatoria de un verbo
function getRandomConjugation(verb) {
    const randomIndex = Math.floor(Math.random() * 3); // 0, 1 o 2
    return verb[randomIndex];
}

// Función para manejar el botón "Easy"
easyButton.addEventListener("click", () => {
    loadVerbs();
    verbTable.querySelectorAll("tr").forEach((row) => {
        const verbsInRow = row.querySelectorAll("td");
        const randomIndex1 = Math.floor(Math.random() * 3); // 0, 1 o 2
        let randomIndex2;

        do {
            randomIndex2 = Math.floor(Math.random() * 3); // 0, 1 o 2
        } while (randomIndex2 === randomIndex1); // Asegura que sean diferentes

        verbsInRow.forEach((td, index) => {
            if (index === randomIndex1 || index === randomIndex2) {
                const verb = td.textContent;
                const conjugations = irregularVerbs.find((v) => v.includes(verb));

                if (conjugations) {
                    td.textContent = conjugations[index]; // Mostrar el verbo generado
                }
            } else {
                // Crear un elemento de entrada de texto para las casillas en blanco
                const inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.classList.add("conjugation-input");
                td.innerHTML = ""; // Limpiar el contenido del td
                td.appendChild(inputElement); // Agregar el elemento de entrada de texto

                let answeredCorrectly = false; // Variable para rastrear si se respondió correctamente

                // Agregar un evento para comprobar la respuesta del usuario
                inputElement.addEventListener("blur", () => {
                    if (answeredCorrectly) {
                        inputElement.readOnly = true; // Deshabilitar el campo si ya se respondió correctamente
                        return;
                    }

                    const verb = inputElement.value;
                    const conjugations = irregularVerbs.find((v) => v.includes(verb));

                    if (conjugations) {
                        const correctConjugation = conjugations[index];

                        // Verificar si la respuesta del usuario coincide con la conjugación correcta
                        if (verb === correctConjugation) {
                            td.style.backgroundColor = "green"; // Correcto (fondo verde)
                            answeredCorrectly = true; // Marcar como respondido correctamente
                            inputElement.readOnly = true; // Deshabilitar el campo
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
    verbTable.querySelectorAll("tr").forEach((row) => {
        const verbsInRow = row.querySelectorAll("td");

        verbsInRow.forEach((td, index) => {
            if (index === 0) {
                const verb = td.textContent;
                const conjugations = irregularVerbs.find((v) => v.includes(verb));

                if (conjugations) {
                    td.textContent = conjugations[index]; // Mostrar el verbo generado
                }
            } else {
                const inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.classList.add("conjugation-input");
                td.innerHTML = "";
                td.appendChild(inputElement);

                let answeredCorrectly = false;

                inputElement.addEventListener("blur", () => {
                    if (answeredCorrectly) {
                        inputElement.readOnly = true;
                        return;
                    }

                    const verb = inputElement.value;
                    const conjugations = irregularVerbs.find((v) => v.includes(verb));

                    if (conjugations) {
                        const correctConjugation = conjugations[index];

                        if (verb === correctConjugation) {
                            td.style.backgroundColor = "green";
                            answeredCorrectly = true;
                            inputElement.readOnly = true;
                        } else {
                            td.style.backgroundColor = "red";
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
    verbTable.querySelectorAll("tr").forEach((row) => {
        const verbsInRow = row.querySelectorAll("td");
        const randomIndex = Math.floor(Math.random() * 3);

        verbsInRow.forEach((td, index) => {
            if (index === randomIndex) {
                const verb = td.textContent;
                const conjugations = irregularVerbs.find((v) => v.includes(verb));

                if (conjugations) {
                    td.textContent = conjugations[index];
                }
            } else {
                const inputElement = document.createElement("input");
                inputElement.type = "text";
                inputElement.classList.add("conjugation-input");
                td.innerHTML = "";
                td.appendChild(inputElement);

                let answeredCorrectly = false;

                inputElement.addEventListener("blur", () => {
                    if (answeredCorrectly) {
                        inputElement.readOnly = true;
                        return;
                    }

                    const verb = inputElement.value;
                    const conjugations = irregularVerbs.find((v) => v.includes(verb));

                    if (conjugations) {
                        const correctConjugation = conjugations[index];

                        if (verb === correctConjugation) {
                            td.style.backgroundColor = "green";
                            answeredCorrectly = true;
                            inputElement.readOnly = true;
                        } else {
                            td.style.backgroundColor = "red";
                        }
                    }
                });
            }
        });
    });
});


// Función para mostrar una fila aleatoria en la tabla
    function showRandomRow() {
        const randomIndex = Math.floor(Math.random() * irregularVerbs.length);
        const randomVerb = irregularVerbs[randomIndex];

        // Crear una fila <tr> y agregar celdas <td> a la tabla existente
        const row = verbTable.insertRow(-1); // Insertar al final de la tabla
        for (let i = 0; i < randomVerb.length; i++) {
            const cell = row.insertCell(i);
            cell.textContent = randomVerb[i];
        }
    }

    // Agregar event listener al botón "Challenge"
    challengeButton.addEventListener("click", () => {
        showRandomRow();
    });
});

// Cargar los verbos al cargar la página
loadVerbs();
