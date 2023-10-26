<template>
  <v-app-bar app color="#080808" elevation="0" class="nav">
    <v-img src="../assets/logo.svg" to="home" class="navmg"></v-img>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavbarComp',
}
</script>

<style>
.nav {
  height: 69px;
  border-bottom: 1px solid white;
  z-index: 666;
}

.navmg {
  height: 49px;
  margin-top: 5px;
}
</style>