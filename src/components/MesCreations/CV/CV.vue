<template>
  <div class="containerModaleCV">
    <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
    <div>
      <button v-on:click="toggleModale" class="bouton">
        <h1>Curriculum Vitae</h1>
        <img
          src="@/assets/CV/CV.png"
          alt="Image de mon CV réalisé en HTML et CSS"
        />
      </button>
    </div>
  </div>
</template>

<script>
import ModaleCV from "./ModaleCV.vue";

export default {
  name: "Contenu",
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: ModaleCV,
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<style scoped>
.containerModaleCV button:hover {
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
  margin: 10px 10px 10px 30px;
  cursor: zoom-in;
}
</style>
