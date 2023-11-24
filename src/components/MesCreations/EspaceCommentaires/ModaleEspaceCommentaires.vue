<template>
  <div class="commentaire-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <button type="button" class="btn-modale" v-on:click="toggleModale">
        X
      </button>
      <h2>Dynamiser un espace commentaire</h2>
      <p class="dateCration">
        Cette création a été réalisé le
        <time datetime="2023-22-10T18:00">22 Octobre 2023</time>
      </p>
      <div class="technologies">
        <p>
          Les technologies utilisées pour effectuer cette création sont :
          VSCode, HTML, CSS et JavaScript.
        </p>
      </div>
      <div>
        <p>
          Voici mon entraînement "Dynamiser un espace commentaire" :
          <a
            href="@/assets/EspaceCommentaires/Commentaires.html"
            target="_blank"
            ><img
              src="@/assets/EspaceCommentaires/dynamiser un espace commentaire (1).png"
              alt=""
          /></a>
        </p>
        <p>
          Vous pouvez tester cet espace
          <a
            href="@/assets/EspaceCommentaires/Commentaires.html"
            target="_blank"
            >ici.</a
          >
        </p>
      </div>
      <div>
        <p>
          Vous pouvez également retrouver mon entraînement "Dynamiser un espace
          commentaire" sur mon GitHub :
          <a
            href="https://github.com/LeaKglr/Dynamiser-un-espace-commentaire"
            target="_blank"
            >Ici</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleCommentaires",
  props: ["revele", "toggleModale"],
};
</script>

<style scoped>
.commentaire-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  color: #004aad;
}

p {
  color: #000000;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modale {
  background: #d9d9d9;
  padding: 50px;
  position: fixed;
  top: 30%;
  width: 60%;
  height: 300px;
  overflow-y: scroll;
}

.btn-modale {
  width: 25px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #004aad;
  padding: 5px;
  color: #d9d9d9;
}

img {
  width: 75%;
  cursor: zoom-in;
  padding: 20px;
}
</style>
