<template>
  <div>
    <v-toolbar
      app
      fixed
      flat
      color="white"
    >
      <img width="170" :src="require('@/assets/logo.jpg')">
      <v-spacer/>
      <div class="hidden-sm-and-down">
        <v-btn v-for="item, key in navigationItems" class="ma-2" :icon="item.icon ? true : false" :to="item.to"
               :key="key"
               color="secondary">
          <v-icon v-if="item.icon" v-html="item.icon"></v-icon>
          <span v-else v-html="item.name"></span>
        </v-btn>
        <SocialMedia/>
      </div>
      <v-btn chip color="secondary" dark @click="navigation = !navigation" class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="navigation" fixed right class="hidden-md-and-up">
      <v-toolbar dark flat color="primary">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item, key in navigationItems" :key="key" :to="item.to">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile style="position:fixed; bottom: 0;">
          <v-list-tile-content class="justify-center">
            <SocialMedia/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
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
      return {
        navigation: false
      }
    }
  }
</script>
