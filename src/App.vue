<template>
  <header class="header">
    <NavBar />
  </header>
  <main class="main">
    <Accueil />
    <Presentation />
  </main>
  <footer class="footer"></footer>
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Accueil from "./components/Accueil.vue";
import Presentation from "./components/Presentation.vue";
</script>

<style scoped>
.header {
  width: 100%;
  height: 100px;
}

.main {
  width: 100%;
  height: auto;
  margin: 50px 0 30px 0;
}

.footer {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
}
</style>
