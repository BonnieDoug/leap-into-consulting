<template>
  <section
    id="welcome"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        hidden-sm-and-down
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
        />

        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs10
            md6
          >
            <base-heading>Leap into Consulting™</base-heading>
            <base-text>
              <p>Are you tired of boardroom games, office politics and procrastination?</p>
              <p>Maybe you just want more flexibility to be available for Sport's Days, Parents Evenings, Caring for
                other members of your family or just a better work life balance?</p>
              <!--<p>Do you want to be rewarded for your achievements and effort?</p>-->
              <!--<p>If you dread the thought of Monday mornings at work and would love more flexibility, why not consider-->
                <!--becoming a consultant?</p>-->
              <!--<p>Now you can launch your own consultancy , whether you are resigning, being made redundant , returning-->
                <!--to work or retiring from corporate life.</p>-->
              <!--<blockquote class="blockquote">"It can be an absolute nightmare getting your head around all the stuff you need to know when-->
                <!--you look into starting a business. There are so many things you need to do, and you need help in-->
                <!--the initial stages." - <a href="https://www.womensbusiness.club">Woman business owner, Southampton</a>-->
              <!--</blockquote>-->
            </base-text>
            <base-btn class="mt-4">
              Learn More!
            </base-btn>
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>
