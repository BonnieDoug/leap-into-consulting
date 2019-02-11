<template>
  <v-toolbar
    app
    fixed
    flat
    color="white"
  >
    <img width="170" :src="require('@/assets/logo.jpg')">
    <v-spacer/>
    <template class="hidden-sm-and-down">
      <v-btn v-for="item, key in navigationItems" class="ma-2" :icon="item.icon" :to="item.to" :key="key"
             color="secondary">
        <v-icon v-if="item.icon" v-html="item.icon"/>
        <span v-else v-html="item.name"/>
      </v-btn>
      <SocialMedia/>
    </template>
    <v-btn chip color="secondary" dark class="hidden-ms-and-up">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
  </v-toolbar>
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
    },
    props: {
      isMobile: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {}
    }
  }
</script>
