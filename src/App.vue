<template>
  <div id="app">
    <gate></gate>
    <header-menu/>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import Gate from '@/components/Gate'

export default {
  name: 'App',
  components: {
    'header-menu': HeaderMenu,
    'gate': Gate
  }
}
</script>

<style lang="scss">
  @import 'sass/app.scss';

  .fade-enter-active, .fade-enter, .fade-leave-active, .fade-leave-to {
    position: fixed;
    transition: all .5s linear;
    width: 100%;
    margin-top: 0;
  }

  .fade-enter-active { // new page start
    top: 60px;
    opacity: 1;
  }

  .fade-enter { // new page end
    top: 100% !important;
    opacity: 0;
  }

  .fade-leave-active { // current page start
    top: 60px;
    opacity: 1;
  }

  .fade-leave-to { // current page end
    top: 100% !important;
    opacity: 0;
  }
</style>
