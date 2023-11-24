<template>
  <div class="containerModaleCahierDesCharges">
    <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
    <div>
      <button v-on:click="toggleModale" class="bouton">
        <h1>Cahier des Charges</h1>
        <img
          src="@/assets/CahierDesCharges/Cahierdescharges.png"
          alt="Extrait de ma création cahier des charges"
        />
      </button>
    </div>
  </div>
</template>

<script>
import ModaleCahierDesCharges from "./ModaleCahierDesCharges.vue";

export default {
  name: "Contenu",
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: ModaleCahierDesCharges,
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<style scoped>
.containerModaleCahierDesCharges button:hover {
  box-shadow: 30px 30px 30px #004aad;
  transition: 0.3s;
}
.bouton {
  width: 50%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 25% 25px 25%;
  border-radius: 5%;
  background-color: #d9d9d9;
}

img {
  width: 400px;
  height: auto;
  margin: 10px 10px 10px 25px;
  cursor: zoom-in;
}
</style>
