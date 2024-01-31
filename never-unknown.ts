let userImput: unknown; //magari perche non sappiamo cosa inserisce l'utente
let userName: string;
//puoi assegnare valori di ogni tipo ad unknown
userImput = 5;
userImput = "max";
// TS mi da errore cosi perche non puoi avere la certezza che user input è una stringa
//! userName = userImput;
//se controllo prima va bene!
if (typeof userImput === "string") {
  userName = userImput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("trovato un errore!", 500);
