<template>
  <v-app light>
    <core-toolbar/>
    <v-content>
      <nuxt/>
    </v-content>
    <core-footer/>
  </v-app>
</template>

<script>
  export default {
    transition: 'v-fade-transition',
    components: {
      CoreFooter: () => import('~/components/core/Footer'),
      CoreToolbar: () => import('~/components/core/Toolbar'),
      CoreView: () => import('~/components/core/View')
    }
  }
</script>
