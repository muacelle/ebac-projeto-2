// Elementos
const form = document.getElementById("add-contact-form");
const table = document.getElementById("contact-list");

// Array dos contatos
let contacts = []

// Evento
form.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent page refresh

    // Pega os valores submetidos 
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;

    if(contacts.find(contact => contact.name === name)) {
        alert("Contact already exist!")
        return;
    }

    if(isNaN(number)){
        alert("Number should contain only numbers!");
        return;
    }

    // Cria uma nova linha para o contato
    const row = document.createElement("tr");

    // Insere as informações do contato
    const nameCell = document.createElement("td");
    nameCell.textContent = name;
    const numberCell = document.createElement("td");
    numberCell.textContent = number;
    row.appendChild(nameCell);
    row.appendChild(numberCell);

    // Adiciona a linha à tabela
    table.appendChild(row);

    // Adiciona o contato à array
    contacts.push({name: name, number: number});

    // Limpa os inputs
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
});