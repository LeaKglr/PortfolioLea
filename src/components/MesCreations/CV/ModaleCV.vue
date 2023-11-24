<template>
  <div class="cv-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <button type="button" class="btn-modale" v-on:click="toggleModale">
        X
      </button>
      <h2>Curriculum Vitae</h2>
      <p class="dateCration">
        Cette création a été réalisé le
        <time datetime="2023-05-08T18:00">5 Août 2023.</time>
      </p>
      <div class="technologies">
        <p>
          Les technologies utilisées pour effectuer cette création sont :
          VSCode, HTML, CSS.
        </p>
      </div>
      <div>
        <p>
          Voici un lien vers mon CV :
          <a href="@/assets/CV/CurriculumVitae.html" target="_blank"
            >ici.
            <img
              src="@/assets/CV/CV(1).png"
              alt="Image de mon CV réalisé en HTML et CSS"
            />
            <img
              src="@/assets/CV/CV(2).png"
              alt="Image de mon CV réalisé en HTML et CSS"
            />
            <img
              src="@/assets/CV/CV(3).png"
              alt="Image de mon CV réalisé en HTML et CSS"
            />
          </a>
        </p>
      </div>
      <div>
        <p>
          Vous pouvez également retrouver mon CV sur mon GitHub :
          <a href="https://github.com/LeaKglr/Curriculum-Vitae" target="_blank"
            >ici</a
          >.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleCV",
  props: ["revele", "toggleModale"],
};
</script>

<style scoped>
.cv-modale {
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
  position: absolute;
  width: 25px;
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
