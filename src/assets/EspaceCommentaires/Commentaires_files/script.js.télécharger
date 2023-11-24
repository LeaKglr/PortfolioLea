// Récupération des éléments du DOM

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const message = document.getElementById("message");
const errorMessage = document.getElementById("error-message");
const commentList = document.getElementById("comment-list");

// Évènement submit

form.addEventListener("submit", (e) => {
  if (
    // Si un ou plusieurs champs sont vides
    firstName.value.trim() === "" ||
    lastName.value.trim() === "" ||
    message.value.trim() === ""
  ) {
    showError(); // Montrer le message d'erreur
  } else {
    // Sinon, afficher le nouveau commentaire et supprimer le message d'erreur
    errorMessage.remove();
    newComment();
    // Suppression du contenu des champs
    deleteFields();
  }
  e.preventDefault();
});

function showError() {
  errorMessage.style.display = "block";
}

function newComment() {
  // Créer de nouveaux élements dans le DOM
  const newDiv1 = document.createElement("div");
  const newDiv2 = document.createElement("div");
  const newH3 = document.createElement("h3");
  const newDiv3 = document.createElement("div");
  const newP = document.createElement("p");
  const newHr = document.createElement("hr");

  // Récupération du style pour le nouveau commentaire
  newDiv1.className = "flex space-x-4 text-sm text-gray-500";
  newDiv2.className = "flex-1 py-10";
  newH3.className = "font-medium text-gray-900";
  newDiv3.className = "prose prose-sm mt-4 max-w-none text-gray-500";

  // Créer du texte avec des valeurs déjà existantes
  const newTextH3 = document.createTextNode(
    firstName.value.trim() + " " + lastName.value.trim()
  );
  const newTextP = document.createTextNode(message.value.trim());

  newH3.innerTextContent = newTextH3;
  newP.innerTextContent = newTextP;

  // Organisation des éléments du nouveau commentaire
  commentList.appendChild(newDiv1);
  newDiv1.appendChild(newDiv2);
  newDiv2.appendChild(newH3);
  newDiv2.appendChild(newDiv3);
  newH3.appendChild(newTextH3);
  newDiv3.appendChild(newP);
  newP.appendChild(newTextP);
  newDiv3.appendChild(newHr);
}

function deleteFields() {
  firstName.value = "";
  lastName.value = "";
  message.value = "";
}
