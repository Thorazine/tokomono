<template>
  <header>
    <div class="container">
      <router-link :to="{ name: 'Toko'}" class="brand">
        <img src="../assets/tokomono-logo.png">
        <span>Tokomono</span>
      </router-link>
      <ul>
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
    </div>
  </header>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../sass/app.scss';

  a.brand {
    display: block;
    height: 100%;
    width: 200px;

    &:hover {
      text-decoration: none;
    }

    img {
      height: 50px;
      margin-top: 5px;
      float: left;
    }

    span {
      display: block;
      line-height: 60px;
      margin-left: 60px;
      font-size: 40px;
      font-family: Quicksand;
    }
  }

  ul {
    display: flex;
    margin: 14px 0;
    padding: 0;
    position: absolute;
    right: 15px;
    top: 0;
  }

  li {
    list-style: none;
    padding: 0;
    border-right: 1px solid $color;
    padding: 5px 10px;
    transition: all 1s;

    &:last-child {
      border: none;
    }

    &:hover a, a.active {
      border-bottom: 1px solid $color;
      text-decoration: none;
    }
  }

  a {
    transition: all 1s;
    text-decoration: none;
    color: $color;
    border-bottom: 1px solid transparent;
  }
</style>
