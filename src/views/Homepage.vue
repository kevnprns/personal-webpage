<template lang="html">

  <v-container grid-list-xl fluid style="height: 100%;">
    <h3 class="backgroundText"> <i>All work and no play makes Kevin a dull boy.</i> </h3>
    <h1 class="backgroundText">Pick your side</h1>

    <v-layout row wrap style="height: 100%;">

      <v-flex v-for="picture of bigImages" :key="picture.id" xs6>
        <v-content style="height: 100%;" >

          <!-- <v-container  fill-height > -->
            <!-- <v-card dark color="secondary" style="height: 70%;"> -->
              <router-link tag="div" :to="{ name: picture.link }">

                  <div
                      v-ripple
                      class="text-center elevation-2 pa-12 headline"
                      :elevation="hover ? 12 : 2"
                    >
                    <v-img
                    aspect-ratio="1.2"
                    :src="getImgPath(picture.source)"
                    gradient="to top right, rgba(0,0,0,10), rgba(0,0,0,.3)"
                    v-bind:alt="picture">

                      <v-container fluid fill-height>
                        <div style="margin: auto">
                          <h2 >
                            {{picture.type}}
                          </h2>
                        </div>
                      </v-container>
                    </v-img>
                  </div>
              </router-link>

            <!-- </v-card> -->
          <!-- </v-container> -->
        </v-content>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'This is Kevins Vue App',

      // bigImages: ['@/assets/EloraGorge_river.jpeg', '@/assets/coding.jpeg']
      bigImages: [
        { source: 'EloraGorge_river.jpeg', type: 'Play', link: 'InConstruction' },
        { source: 'coding.jpg', type: 'Work', link: 'Work' }
      ]
    }
  },

  methods: {
    getImgPath (filename) {
      return require('@/assets/' + filename)
    }
  }
}
</script>

<style lang="css">

  h2 {
    text-align: center;
  }

  .backgroundText {
    color: #f2f2f2;
  }
</style>
