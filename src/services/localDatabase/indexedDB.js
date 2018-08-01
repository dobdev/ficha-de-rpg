import CharacterModel from "../../models/Character";

// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// Não use "var indexedDB = ..." se você não está numa function.
// Posteriormente, você pode precisar de referências de algum objeto window.IDB*:
// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
// window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla nunca usou prefixo nesses objetos, então não precisamos window.mozIDB*)

var db;

if (!window.indexedDB) {
    window.alert("Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.");
} else {
    // Abrindo o banco de dados
    var request = window.indexedDB.open("FichaDB", 3);
    // Tratamento de resposta da abertura do banco de dados
    request.onerror = function(event) {
        alert("Você não habilitou minha web app para usar IndexedDB?!");
    };
    request.onsuccess = function(event) {
        db = request.result;
        
    };

    request.onupgradeneeded = function(event) {
        var db = event.target.result;

        // Cria um objectStore para conter a informação sobre nossos clientes. Nós vamos
        // usar "ssn" como key path porque sabemos que é único;
        var objectStore = db.createObjectStore("characters", { keyPath: "chars" });

        // Cria um índice para buscar clientes pelo nome. Podemos ter nomes
        // duplicados, então não podemos usar como índice único.
        objectStore.createIndex("Name", "Name", { unique: true });

        // Cria um índice para buscar clientes por email. Queremos ter certeza
        // que não teremos 2 clientes com o mesmo e-mail;
        objectStore.createIndex("Level", "Level", { unique: false });

        objectStore.createIndex("Gender", "Gender", { unique: false });

        objectStore.createIndex("Race", "Race", { unique: false });

        objectStore.createIndex("Classe", "Classe", { unique: false });

        objectStore.createIndex("Pow", "Pow", { unique: false });

        objectStore.createIndex("Dex", "Dex", { unique: false });

        objectStore.createIndex("Con", "Con", { unique: false });

        objectStore.createIndex("Int", "Int", { unique: false });
        
        objectStore.createIndex("Sab", "Sab", { unique: false });

        objectStore.createIndex("Car", "Car", { unique: false });
    }
}

function getCharacter() {
    let transaction = db.transaction(["characters"], "readwrite");
    let store = transaction.objectStore("characters");
    let request = store.get("david");

    alert("O nome do objeto david " + request.result.name);
}

function setCharacter(data) {
    let transaction = db.transaction(["characters"], "readwrite");
    let store = transaction.objectStore("characters");
    let request = store.add(data);
}
