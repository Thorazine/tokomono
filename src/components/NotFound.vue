<template>
  <div class="container page">
    Whoopsie daisy, nothing here
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  mounted () {
    window.document.title = 'Pagina niet gevonden'
  }
}
</script>

<style lang="scss">
    @import '../sass/app.scss';

</style>
