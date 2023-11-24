<template>
  <nav class="navbar">
    <div class="logo">
      <a href="">
        <img src="../assets/LogoPortfolio.png" alt="" />
      </a>
    </div>
    <div class="liensNavBar">
      <a href="#" class="liens">Accueil</a>
      <a href="#me" class="liens">Présentation</a>
      <a href="#MesCreations" class="liens">Mes créations</a>
      <a href="#Formulaire" class="liens">Formulaire de contact</a>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  width: 100%;
  height: 120px;
  top: 0;
  left: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  position: fixed;
  justify-content: space-between;
  padding: 20px 10%;
  background-color: transparent;
}

.liensNavBar {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 350px;
}

.liensNavBar a {
  font-size: 20px;
  font-weight: 400;
  text-decoration: none;
  color: #5de0e6;
  transition: 0.3s;
  font-family: "Allerta Stencil", sans-serif;
}

.liensNavBar a:focus {
  text-decoration: underline;
}

.logo img {
  width: 110px;
  height: 100px;
  border-radius: 10%;
  box-shadow: 0 0 30px #5de0e6;
}
</style>
