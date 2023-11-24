<template>
  <div class="cahier-des-charges-modale" v-if="revele">
    <div class="overlay" v-on:click="toggleModale"></div>
    <div class="modale card">
      <button type="button" class="btn-modale" v-on:click="toggleModale">
        X
      </button>
      <h2>Cahier des charges</h2>
      <p class="dateCration">
        Cette création a été réalisé le
        <time datetime="2023-01-09T18:00">1er Septembre 2023</time>
      </p>
      <div class="technologies">
        <p>
          Les technologies utilisées pour effectuer cette création sont : Word,
          site web et Canva.
        </p>
      </div>
      <div>
        <p>
          Voici quelques photographies du cahier des charges :
          <a
            href="@/assets/CahierDesCharges/Cahier des charges Socketterie.pdf"
          >
            <img
              src="@/assets/CahierDesCharges/sommaire cahier des charges.png"
              alt=""
            />
            <img
              src="@/assets/CahierDesCharges/Sommaire cahier des charges(2).png"
              alt=""
            />
            <img src="@/assets/CahierDesCharges/Maison Broussaud.png" alt="" />
            <img
              src="@/assets/CahierDesCharges/Maison broussaud(2).png"
              alt=""
            />
            <img
              src="@/assets/CahierDesCharges/maison brousseau(3).png"
              alt=""
            />
          </a>
        </p>
        <p>
          Pour le consulter entièrement, cliquez
          <a
            href="@/assets/CahierDesCharges/CahierdeschargesSocketterie.pdf"
            target="_blank"
            >ici.</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModaleCahierDesCharges",
  props: ["revele", "toggleModale"],
};
</script>

<style scoped>
.cahier-des-charges-modale {
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

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

h2 {
  color: #004aad;
}

p {
  color: #000000;
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
