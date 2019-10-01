<template lang="html">
  <main>
    <v-container fluid >
      <h1>{{msg}}</h1>
      <br>
          <v-layout flex align-center justify-center>
              <v-img
                  src="https://media.giphy.com/media/H54iQXnwulV0sFq93w/giphy.gif"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  max-width="40%"
                  max-height="40%"
                  position="center center"
                ></v-img>
          </v-layout>

    </v-container>
  </main>

</template>

<script>
export default {
  name: 'InConstruction',
  data () {
    return {
      msg: 'In Construction'
    }
  },
  
}
</script>

<style lang="css">
</style>
