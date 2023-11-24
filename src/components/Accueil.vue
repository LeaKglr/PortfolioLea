<template>
  <div id="main">
    <div class="presentation">
      <h1>Bienvenue ! 👋</h1>
      <div class="NomPrenom">
        <p>
          Je me présente, je m'appelle {{ fullName }} mais vous pouvez aussi
          m'appeler {{ nickNameCompleted }} !
        </p>
      </div>
      <div class="formation">
        <p>
          Je suis actuellement en formation au Centre Européen de Formation
          (CEF) afin d'obtenir mon titre de développeur web et web mobile (DWWM)
          👩‍🎓
        </p>
      </div>
      <div class="ContenuPortfolio">
        <p>Vous trouverez dans ce portfolio :</p>
        <ul>
          <li>Ma présentation,</li>
          <li>Mes créations,</li>
          <li>Mon formulaire de contact.</li>
        </ul>
      </div>
      <div class="rs">
        <p>
          N'hésitez pas à aller voir mes réseaux sociaux en bas de la page ! 😁
        </p>
      </div>
    </div>
    <div class="image">
      <img
        src="../assets/PhotoLeaKugler.png"
        alt="Photographie de Léa Kugler"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const firstName = ref("Léa");
const lastName = ref("Kugler");
const nickName = ref("Dev");

const fullName = computed({
  get() {
    return firstName.value + " " + lastName.value;
  },
});

const nickNameCompleted = computed({
  get() {
    return firstName.value + " " + nickName.value;
  },
});
</script>

<style scoped>
#main {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

p,
li {
  font-family: "Arimo", sans-serif;
  color: black;
  font-size: 20px;
}

li {
  margin: 10px;
}

.presentation {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px;
  padding: 0 0 20px 20px;
  background-color: #d9d9d9;
  border-radius: 5%;
  border: solid #d9d9d9;
  box-shadow: 0 0 30px #5de0e6;
}

h1 {
  padding: 30px;
  font-family: "Allerta Stencil", sans-serif;
  color: black;
  font-size: 50px;
}

.image {
  width: 300px;
  height: 450px;
  display: flex;
}

.main img {
  width: 100%;
  height: 100%;
  border-radius: 10%;
  box-shadow: 0 0 30px #5de0e6;
  background-color: #d9d9d9;
}

.NomPrenom {
  margin-bottom: 20px;
}

.formation {
  margin-bottom: 20px;
}

.ContenuPortfolio {
  margin-right: 200px;
}

.rs {
  margin-right: 200px;
}
</style>
