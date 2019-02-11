<template>
  <section
    id="services"
    class="hide-overflow"
  >
    <v-layout accent>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/sarah_sue.jpg')"
          height="100%"
        />
      </v-flex>
      <v-flex
        xs12
        md6
        pa-5
        white--text
      >
        <v-layout
          align-center
          justify-center
          fill-height
          wrap
        >
          <v-flex xs12>
            <base-bubble-2
              style="transform: translateX(55%)"
            />
            <base-heading>
              Your Fast Track Programme Coaches
            </base-heading>

            <base-text class="mb-5">
              <p>Two leading business owners, consultants and coaches are both experienced in setting up and building businesses - and experts in areas that are core to your future success.  With a maxium of 20 people on each Fast Track Retreat - you will have a team of coaches to support you - and we will continue coaching you even after the 3 days!</p>
              <p>Each retreat has inspirational guest speakers and carefully selected partners for you to work with immediately, create a referral income and provide additional tools, products and services that will expand your business.</p>
              <base-btn colour="primary" class="mt-4">
                Continue reading about your coaches here.
              </base-btn>
            </base-text>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    services: [
      {
        name: 'Research',
        icon: 'mdi-clipboard-text-outline',
        blurb: 'Curabitur et nisi semper,<br> pellent e sque '
      },
      {
        name: 'Design',
        icon: 'mdi-pencil-outline',
        blurb: 'Curabitur et nisi semper, <br>pellent.'
      },
      {
        name: 'Development',
        icon: 'mdi-settings-outline',
        blurb: 'Curabitur et nisi semper, <br>pellent.'
      },
      {
        name: 'Support',
        icon: 'mdi-account',
        blurb: 'Curabitur et nisi semper, <br>pellent.'
      }
    ]
  })
}
</script>
