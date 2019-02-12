<template>

</template>

<script>
  import {mapState} from 'vuex'

  export default {
    components: {
      SocialMedia: () => import('@/components/SocialMedia')
    },
    computed: {
      ...mapState({
        navigationItems: state => state.navigation.items
      })
    }
  }
</script>
