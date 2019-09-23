<template>
  <div id="app">

    <v-app>
      <v-content>
        <v-container fluid style="height: 100%;">
          <router-view/>
        </v-container>
      </v-content>

      <v-footer
        dark
        height="auto"
        style="bottom:0px;"
      >
        <v-card
          class="flex"
          flat
          tile>
          <v-card
            flat
            tile
            class="grey darken-3"
          >
            <v-card-text>

              <v-btn
                v-for="mediaType in socials"
                :key="mediaType.id"
                class="mx-4 white--text"
                icon
                :href="mediaType.link"
                target="_blank"
              >
                <v-icon size="24px" >{{ mediaType.icon }}</v-icon>
              </v-btn>

            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text">
              {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
            </v-card-text>
          </v-card>
        </v-card>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      currentLinks: null,
      playLinks: ['facebook', 'instagram'],
      workLinks: ['chat', 'chat'],
      socials: [
        { icon: 'fab fa-facebook', name: 'Facebook', link: 'https://www.facebook.com/kevin.prince.7370' },
        { icon: 'fab fa-instagram', name: 'Instagram', link: 'https://www.instagram.com/kevnprns/' },
        { icon: 'fab fa-linkedin', name: 'LinkedIn', link: 'https://www.linkedin.com/in/kevin-prince-5bba59104/' },
        { icon: 'fab fa-github', name: 'Github', link: 'https://github.com/kevnprns' }
      ],
      baseUrl: 'https://github.com/kevnprns'
    }
  }

}
</script>

<style>
#app {
  font-family: "Perpetua";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f2f2f2;
  height: 100%;
  background-color: black;
  /* margin-top: 60px; */
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
