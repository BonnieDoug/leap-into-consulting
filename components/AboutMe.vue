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


          <v-timeline>
            <v-timeline-item v-for="article, key in articles" :key="key"
              color="secondary" small>
              <span slot="opposite" v-html="article.date"></span>
              <v-card class="elevation-2">
                <v-card-title class="headline" v-html="article.headline"></v-card-title>
                <v-card-text>
                  <p v-html="article.text"></p>
                  <base-btn colour="primary">Find out more</base-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          <v-flex text-xs-center>
          <v-btn round color="secondary" to="/events">View all upcoming events &nbsp;<v-icon color="white">mdi-forward</v-icon></v-btn>
          </v-flex>
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
      articles: [
        { date: 'Web 20th March 2019, 9.30am', headline: 'Leap into Consulting™ - Is Consulting right for you?\n', text: 'This 3-hour session is led by Sarah Hamilton-Gill, MD of GlobusHR Consulting Ltd and author of the "Leap into Consulting™" book and Sue Benoke from Smarter Business Consulting Ltd. This event brings together like minded people that are interested in hearing more about the world of consulting and considering making the leap.', to: '' },
        { date: 'Tue 30th April 2019, 9.30am', headline: 'Leap into Consulting™', text: 'This is your opportunity to discover whether you have what it takes to move into Consulting. Our team of Consulting experts will explain why this is the right time to be a consultant and how you can succeed in making the transition.', to: '' }
      ]
    })
  }
</script>
