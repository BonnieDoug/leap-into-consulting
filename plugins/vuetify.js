import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: {
    primary: colors.teal.base, // a color that is not in the material colors palette
    accent: colors.purple.darken2,
    secondary: colors.purple.darken2,
    info: colors.teal.darken2,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
