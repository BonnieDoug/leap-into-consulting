<template>
  <section
    id="recent-projects"
    class="hide-overflow"
  >
    <v-layout>
      <v-flex
        xs12
        md6
        primary
        pa-5
        white--text
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateX(25%)"
        />
        <base-heading>
          The Book on creating your own HR Consulting business now ...
        </base-heading>

        <base-text class="mb-5">
          In this book Sarah Hamilton-Gill shares with you a practical approach to setting up your consulting business and inspires you with her many stories of her successes and also the honesty of when it hasn't gone so well.</base-text>
          <base-text>From the spare bedroom to a £1m plus business  based in St Albans the various challenges are shared at each stage of growth.</base-text>
          <base-text>There are tips ,content and self refelction that will show you that you too can become a consultant.</base-text>
          <base-text>The book is aimed at inspiring you to go into consulting and isn't a theorectical book on consulting skills.</base-text>
          <base-text>Our discovery events explore your interest further and by the end of the session you will have clarity as to what the world of consulting is like and whether consulting is right for you. Book your place</base-text>
          <base-text>All delegates at the discovery event will recieve a signed copy of their book.</base-text>
          <base-text>For those who are inspired to start the journey we would be delighted for youto join us on our 3 Day Fast Track Retreat specifically designed to get you ready for going into consulting, even if you are still employed .</base-text>
          <h3>The book will be published in March 2019.</h3>
          <base-btn class="mt-4">
            Pre-order now!
          </base-btn>

        <!--<v-card color="secondary">-->
          <!--<v-container-->
            <!--grid-list-md-->
            <!--pa-2-->
          <!--&gt;-->
            <!--<v-layout wrap>-->
              <!--<v-flex-->
                <!--v-for="project in projects"-->
                <!--:key="project"-->
                <!--xs12-->
                <!--md6-->
              <!--&gt;-->
                <!--<a href="#">-->
                  <!--<v-img-->
                    <!--:src="require(`@/assets/${project}.jpeg`)"-->
                    <!--max-height="300"-->
                  <!--/>-->
                <!--</a>-->
              <!--</v-flex>-->
            <!--</v-layout>-->
          <!--</v-container>-->
        <!--</v-card>-->
      </v-flex>
      <v-flex
        hidden-sm-and-down
        md6
      >
        <v-img
          :src="require('@/assets/book.jpg')"
          height="100%"
        />
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => ({
    projects: [
      'project1',
      'project2',
      'project3',
      'project4'
    ]
  })
}
</script>
