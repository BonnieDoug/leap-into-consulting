<template>
  <v-toolbar
    app
    fixed
    flat
    color="white"
  >
    <img width="170" :src="require('@/assets/logo.jpg')">
    <v-spacer/>
    <div class="hidden-sm-and-down">
      <v-btn v-for="item, key in navigationItems" class="ma-2" :icon="item.icon ? true : false" :to="item.to" :key="key"
             color="secondary">
        <v-icon v-if="item.icon" v-html="item.icon"></v-icon>
        <span v-else v-html="item.name"></span>
      </v-btn>
      <SocialMedia/>
    </div>
    <v-btn chip color="secondary" dark class="hidden-md-and-up"
           @click="$store.commit('navigation/SET_TOGGLE_NAVIGATION', true)">
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
