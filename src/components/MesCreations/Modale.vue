<template>
  <div id="MesCreations">
    <h1>Mes créations</h1>

    <CV />
    <CahierDesCharges />
    <Commentaires />
  </div>
</template>

<script setup>
import Commentaires from "./EspaceCommentaires/EspaceCommentaires.vue";
import CV from "./CV/CV.vue";
import CahierDesCharges from "./CahierDesCharges/CahierDesCharges.vue";
</script>

<style scoped>
#MesCreations {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  padding-top: 125px;
}

h1 {
  font-family: "Allerta Stencil", sans-serif;
  color: #000000;
  margin-left: 43.5%;
  padding: 20px;
}
</style>
