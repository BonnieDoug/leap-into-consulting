<template>
  <v-app>
    <core-toolbar/>
    <core-side-navigation/>
    <nuxt/>
    <core-footer />
  </v-app>
</template>

<script>
  export default {
    components: {
      CoreFooter: () => import('~/components/core/Footer'),
      CoreSideNavigation: () => import('~/components/core/SideNavigation'),
      CoreToolbar: () => import('~/components/core/Toolbar'),
      CoreView: () => import('~/components/core/View')
    }
  }
</script>
