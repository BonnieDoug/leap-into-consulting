<template>
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        md6
      >
        <v-img
          :src="require('@/assets/pogo.jpg')"
          height="100vh"
        />
      </v-flex>

      <v-flex
        xs12
        md6
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        ></base-bubble-1>

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md6 pt-2
          >
            <base-heading>Leap into Consulting™</base-heading>
            <base-text>
              Are you tired of boardroom games, office politics and procrastination?</base-text>
            <base-text>Maybe you just want more flexibility to be available for Sport's Days, Parents Evenings, Caring for
              other members of your family or just a better work life balance?
            </base-text>
            <base-btn class="mt-4">
              Learn More!
            </base-btn>
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        ></base-bubble-2>
      </v-flex>
    </v-layout>
  </section>
</template>
