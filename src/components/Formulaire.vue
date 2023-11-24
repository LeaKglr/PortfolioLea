<template>
  <div id="Formulaire">
    <div class="FormulaireTitre">
      <h1>Formulaire de contact</h1>
    </div>
    <div class="paragraphe">
      <p>
        N'hésitez pas à me contacter via ce formulaire ! Un mail me sera
        directement envoyé ! 📧
      </p>
    </div>
    <form action="#">
      <div class="input-box">
        <div class="input-field">
          <input type="text" placeholder="Nom" id="Nom" />
          <span class="focus"></span>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Prénom" id="Prénom" />
          <span class="focus"></span>
        </div>
      </div>

      <div class="input-box">
        <div class="input-field">
          <input type="text" placeholder="Objet" id="Objet" />
          <span class="focus"></span>
        </div>
      </div>

      <div class="textarea-field">
        <textarea
          name=""
          id="Message"
          cols="30"
          rows="10"
          placeholder="Ton message"
        ></textarea>
        <span class="focus"></span>
      </div>

      <div class="bouton">
        <button type="submit" class="btnEnvoie" @click="popup">Envoyer</button>
      </div>
    </form>
  </div>
</template>

<script setup>
const popup = (e) => {
  if (
    Nom.value === "" ||
    Prénom.value === "" ||
    Objet.value === "" ||
    Message.value === ""
  ) {
    alert("Merci de remplir tous les champs du formulaire de contact !");
    e.preventDefault();
  } else {
    alert("Le formulaire de contact a bien été envoyé à Léa Dev !");
    deleteFields();
  }
};

function deleteFields() {
  Nom.value = "";
  Prénom.value = "";
  Objet.value = "";
  Message.value = "";
}
</script>

<style scoped>
#Formulaire {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 125px;
}

#Formulaire form {
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 5%;
  padding: 10px;
  box-shadow: 0 0 30px #004aad;
}

.FormulaireTitre {
  padding: 20px;
  font-family: "Allerta Stencil", sans-serif;
  color: #000000;
}

.paragraphe {
  margin-bottom: 50px;
  background-color: #d9d9d9;
  padding: 15px;
  border-radius: 5px;
}

.input-field {
  padding: 10px;
}

input {
  border-radius: 10%;
  padding: 15px;
  font-family: "Arimo", sans-serif;
  border: 2px solid #000000;
  background-color: transparent;
}

input::placeholder {
  color: #004aad;
}

.bouton {
  padding: 10px;
}

.btnEnvoie {
  padding: 10px 25px;
  border-radius: 10%;
  color: #004aad;
  background-color: transparent;
  transition: 0.3s;
}

.btnEnvoie:hover {
  color: #d9d9d9;
  background-color: #004aad;
  cursor: pointer;
}

.textarea-field {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

textarea {
  width: 65%;
  height: auto;
  border-radius: 5%;
  padding: 10px;
  font-family: "Arimo", sans-serif;
  border: 2px solid #000000;
  background-color: transparent;
  transition: 0.3s;
}

textarea::placeholder {
  color: #004aad;
}
</style>
