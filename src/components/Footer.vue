<template>
  <div class="social-networks">
    <a href="https://github.com/LeaKglr" target="_blank">
      <img src="@/assets/ReseauxSociaux/logo github.png" alt="Logo GitHub" />
    </a>
    <a
      href="https://www.linkedin.com/in/l%C3%A9a-kugler-24b640231/"
      target="_blank"
    >
      <img
        src="@/assets/ReseauxSociaux/logo linkedin.png"
        alt="Logo Linkedin"
      />
    </a>
    <a
      href="https://www.facebook.com/profile.php?id=100095303560501"
      target="_blank"
    >
      <img
        src="@/assets/ReseauxSociaux/logo facebook.png"
        alt="Logo Facebook"
      />
    </a>
    <a href="https://www.instagram.com/leadev2/" target="_blank">
      <img
        src="@/assets/ReseauxSociaux/logo instagram.png"
        alt="Logo instagram"
      />
    </a>
  </div>
  <div class="MAJDate">
    <p class="date_maj">
      Mise à jour du site le :
      <time datetime="2023-24-11T18:00">24 Novembre 2023</time>
    </p>
  </div>
</template>

<script></script>

<style scoped>
.social-networks {
  width: 100%;
  height: 100px;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
}

.social-networks img {
  width: 60px;
  height: 60px;
}

.date_maj {
  font-family: "Arimo", sans-serif;
}
</style>
