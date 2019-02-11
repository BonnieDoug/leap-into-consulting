<template>
  <v-navigation-drawer permanent right>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Application
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile v-for="item in navigationItems" :key="item">
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-content>
          <SocialMedia/>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
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
