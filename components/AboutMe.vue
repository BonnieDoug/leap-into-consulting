<template>
  <section
    id="about"
    class="hide-overflow"
  >
    <v-layout white>
      <v-flex
        xs12
        md6
        pa-5
      >
        <base-bubble-1
          style="transform: translate(5%, -5%)"
        />
        <base-heading class="info--text">
          Upcoming events
        </base-heading>

        <base-text class="mb-5">
          <v-timeline>
            <v-timeline-item
              color="secondary" large>
              <span slot="opposite">Web 20th March 2019, 9.30am</span>
              <v-card class="elevation-2">
                <v-card-title class="headline">Leap into Consulting™ - Is Consulting right for you?</v-card-title>
                <v-card-text>
                  <p>This 3-hour session is led by Sarah Hamilton-Gill, MD of GlobusHR Consulting Ltd and author of the
                    "Leap into Consulting™" book and Sue Benoke from Smarter Business Consulting Ltd. This event brings
                    together like minded people that are interested in hearing more about the world of consulting and
                    considering making the leap.</p>
                  <base-btn colour="primary">Find out more</base-btn>
                </v-card-text>
                <v-card-action>
                </v-card-action>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              color="secondary" large>
              <span slot="opposite">Tue 30th April 2019, 9.30am</span>
              <v-card class="elevation-2">
                <v-card-title class="headline">Leap into Consulting™</v-card-title>
                <v-card-text>
                  <p>This is your opportunity to discover whether you have what it takes to move into Consulting. Our
                    team of Consulting experts will explain why this is the right time to be a consultant and how you
                    can succeed in making the transition.</p>
                  <base-btn colour="primary">Find out more</base-btn>
                </v-card-text>
                <v-card-action>
                </v-card-action>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-flex text-xs-center>
          <base-btn colour="secondary">View all upcoming events &nbsp;<v-icon color="white">mdi-forward</v-icon></base-btn>
          </v-flex>
        </base-text>

        <!--<base-subheading class="info&#45;&#45;text">-->
          <!--Skills-->
        <!--</base-subheading>-->
        <!--<base-text class="mb-5">-->
          <!--Lorem ipsum dolor sit amet, consecte tur adipi scin e<br>-->
          <!--lit. Etiam vulputate augu e vel felis gravida porta.-->
        <!--</base-text>-->

        <!--<v-alert-->
          <!--outlined-->
          <!--color="info"-->
        <!--&gt;-->
          <!--<v-layout-->
            <!--v-for="(skill, i) in skills"-->
            <!--:key="i"-->
            <!--style="color: #69A1BB;"-->
            <!--wrap-->
          <!--&gt;-->
            <!--<v-flex-->
              <!--xs6-->
              <!--text-uppercase-->
              <!--v-text="skill.name"-->
            <!--/>-->
            <!--<v-flex-->
              <!--xs6-->
              <!--text-xs-right-->
              <!--v-text="`${skill.value}%`"-->
            <!--/>-->
            <!--<v-progress-linear-->
              <!--:value="skill.value"-->
              <!--color="info"-->
              <!--height="8"-->
            <!--/>-->
          <!--</v-layout>-->
        <!--</v-alert>-->
      </v-flex>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/runner.jpg')"
          height="100%"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
  export default {
    data: () => ({
      skills: [
        {
          name: 'Web Design',
          value: 100
        },
        {
          name: 'Web Development',
          value: 75
        },
        {
          name: 'Web Support',
          value: 90
        }
      ]
    })
  }
</script>
