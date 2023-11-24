<template>
  <div id="MaPresentation">
    <div class="titlePresentation">
      <h1>Ma présentation</h1>
    </div>

    <div class="image">
      <img
        src="../assets/PhotoLeaKugler.png"
        alt="Photographie de Léa Kugler"
      />
    </div>

    <div class="Presentation">
      <p>
        Bonjour et bienvenue sur mon Portfolio ! Je me présente, je m'appelle
        Léa et je suis en formation pour obtenir pour Titre Professionnel de
        Développeur Web et Web Mobile (DWWM). Aujourd'hui, mes compétences sont
        dirigées du côté Front-End avec l'apprentissage du HTML, CSS, JavaScript
        et le framework VueJS.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  font-family: "Allerta", sans-serif;
  color: black;
}

#MaPresentation {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 150px;
  align-items: center;
}

.titlePresentation {
  margin-bottom: 25px;
}

.image {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 30px #5de0e6;
}

.Presentation {
  width: 50%;
  height: auto;
  border-radius: 5%;
  background-color: #d9d9d9;
  color: #000000;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 30px #5de0e6;
}

.Presentation p {
  padding: 20px;
  font-family: "Arimo", sans-serif;
}
</style>
