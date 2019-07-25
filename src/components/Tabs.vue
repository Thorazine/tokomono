<template>
  <div class="tabs">
    <a :href="tab.id" class="tabs-btn" v-for="tab in tabs" v-bind:key="tab.icon">
      {{ tab.title }} <i class="fab fa-apple" :class="'fa-'+tab.icon"></i>
    </a>
    <div class="tabs-tab">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: [
        {
          title: 'Title',
          icon: 'apple',
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
