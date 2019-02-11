<template>
  <v-btn
    :color="colour"
    rounded
  >
    <slot/>
  </v-btn>
</template>

<script>
export default {
  props: {
    colour: {
      type: String,
      default: 'secondary'
    }
  }
}
</script>
