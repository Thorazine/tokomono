<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Toko'}" class="brand">
        <img src="../assets/tokomono-logo.png">
        <span>Tokomono</span>
      </router-link>
      <ul class="menu" :class="{'menu-open': menuOpen}">
        <li>
          <router-link :to="{ name: 'Toko'}">Toko</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Mono'}">Mono</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Contact'}">Contact</router-link>
        </li>
      </ul>
      <div id="menu-button" v-on:click="toggle">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Menu',
  data: function () {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggle () {
      this.menuOpen = !this.menuOpen
      console.log(this.menuOpen)
    }
  }
}
</script>
