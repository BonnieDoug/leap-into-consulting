<template>
  <!--<span>-->
  <!--<div class="text-xs-center">-->
  <span>
    <v-btn
      v-for="(item, i) in items.slice(0, large ? items.length : 3)"
      :key="i"
      fab
      :href="item.to"
      target="_blank"
      class="ma-2 justify-center"
      small
      color="info"
    >
      <v-icon
        dark
        v-text="item.icon"
      />
    </v-btn>
  </span>
  <!--</div>-->
  <!--</span>-->
</template>

<script>
export default {
  props: {
    large: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    items: [
      {
        name: 'Twitter',
        icon: 'mdi-twitter',
        to: 'http://www.twitter.com/leap_into'
      },
      {
        name: 'LinkedIN',
        icon: 'mdi-linkedin',
        to: 'https://www.linkedin.com/showcase/leap-into-consulting/'
      },
      {
        name: 'Facebook',
        icon: 'mdi-facebook',
        to: 'http://www.facebook.com/leapintoc'
      },
      {
        name: 'Email',
        icon: 'mdi-email'
      },
      {
        name: 'Phone',
        icon: 'mdi-phone'
      }
    ]
  })
}
</script>
