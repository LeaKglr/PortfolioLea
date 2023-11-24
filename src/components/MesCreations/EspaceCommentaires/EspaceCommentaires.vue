<template>
  <div class="containerModaleCommentaires">
    <modale v-bind:revele="revele" v-bind:toggleModale="toggleModale"></modale>
  </div>
  <div class="containerModale">
    <button v-on:click="toggleModale" class="bouton">
      <h1>Dynamiser un espace commentaire</h1>
      <img
        src="@/assets/EspaceCommentaires/Ecrire commentaires.png"
        alt="Image de ma création Espace Commentaires"
      />
    </button>
  </div>
</template>

<script>
import ModaleCommentaires from "./ModaleEspaceCommentaires.vue";

export default {
  name: "Contenu",
  data() {
    return {
      revele: false,
    };
  },
  components: {
    modale: ModaleCommentaires,
  },
  methods: {
    toggleModale: function () {
      this.revele = !this.revele;
    },
  },
};
</script>

<style scoped>
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
  margin: 10px;
  cursor: zoom-in;
}

.containerModale button:hover {
  box-shadow: 30px 30px 30px #004aad;
  transition: 0.3s;
}
</style>
