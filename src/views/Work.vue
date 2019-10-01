t<template lang="html">

    <div>

      <v-content fluid>
        <v-layout row wrap>
            <v-flex xs12 sm6>
              <v-img
              :src="getImgPath(nameTag)"
              alt="name and titles"
              max-height="25%"

              />

              <v-img
              aspect-ratio="0.96"
              :src="getImgPath(schoolLogo)"
              alt="name and titles"
              max-width="30%"
              max-height="300px"
              class="invertedColor centered paddedTop"
              />
              <v-img
              aspect-ratio="2.6"
              :src="getImgPath(schoolName)"
              alt="name and titles"
              class="invertedColor centered paddedBottom"
              max-height="40%"
              max-width="40%"
              />

              <h3>Major: Honours Software Engineering</h3>
              <h4 class="paddedBottom">Minor: Marketing Management</h4>

            </v-flex>
            <v-flex xs12 sm6>
              <v-img
              aspect-ratio="1"
              class="paddedImage"
              :src="getImgPath(profilePhoto)"
              alt="name and titles"
              max-height="700px"
              />
            </v-flex>

        </v-layout>

        <v-layout row justify-center class="paddedBottom">
          <v-flex xs6 sm5 md4 lg3 xl2>
            <v-btn href="https://drive.google.com/file/d/17KGOQiz02lTTMxEli8K2D8AKo2RXJSXT/view?usp=sharing" target="_blank" x-large round>
              <v-icon class="paddedIcon" dark >far fa-file-pdf</v-icon>
              Resume
            </v-btn>
          </v-flex>
          <v-flex xs6 sm5 md4 lg3 xl2>
            <v-btn href="mailto:kevkiay97@gmail.com?subject=Website%20Reply:%20" round>
              <v-icon class="paddedIcon" dark >fas fa-inbox</v-icon>
              Email
            </v-btn>
          </v-flex>
        </v-layout>
      </v-content>
      <v-content fluid>

        <v-divider dark/>

        <h1 class="">Background</h1>

        <v-layout row wrap>
          <v-flex xs12 md6>
            <v-parallax class="paddedImage" :src="getImgPath(hometownPhoto)"></v-parallax>

          </v-flex>
          <v-flex xs12 md6>
            <v-layout column justify-center fill-height>

              <div class="sectionSpacing text-sm-left">
                <p class="">Grew up in <span class="red--text">Por</span><span class="yellow--text">tu</span><span class="green--text">gal</span> in a small town called...&nbsp;&nbsp;<span class="jumboWord">Meirinhas</span></p>
                <p class="paddedTop">
                  Moved to Canada in grade 10 by myself to go to school in my grandparents home town.
                </p>
                <p>
                  In high school, I focused on accounting and language courses to improve both my English and French.
                  However, in my grade 12 year, my interest in how software was made grew and I decided to enroll into
                  <br>
                  <span class="jumboWord">Software Engineering</span>
                </p>
              </div>
            </v-layout>
          </v-flex>

        </v-layout>

      </v-content>

      <v-divider dark/>

      <v-content fluid>
        <h1 class="">University Experience</h1>
        <v-layout row wrap >
          <v-flex xs12 sm6>
            <v-layout column justify-center fill-height>

              <div class="sectionSpacing text-sm-right">
                <p class="">Began studying at the University of Guelph in 2015 and completed my program within 4 years.</p>
                <br>
                <p class="paddedTop">Started with limited coding knowledge at the start of the program but caught up quickly through coursework and personal work.</p>
                <p>
                  Never failed a class
                  <v-icon class="" dark >far fa-check-square</v-icon>
                </p>
                <p>
                  Made long lasting connections
                  <v-icon class="" dark >far fa-check-square</v-icon>
                </p>
                <p>
                  Graduated with an 80% CIS average
                  <v-icon class="" dark >far fa-check-square</v-icon>
                </p>

              </div>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm6>
            <v-parallax class="paddedImage" :src="getImgPath(codingPhoto)"></v-parallax>

          </v-flex>

        </v-layout>
      </v-content>

      <v-divider dark/>

      <v-content fluid>
        <h1 class="">Projects</h1>

        <v-expansion-panel class="paddedTop paddedBottom" v-model="panel" popout>
          <v-expansion-panel-content>
            <h3 slot="header">

              <v-layout row wrap>
                <v-flex sm12 md6>
                  Bar Inventory Manager
                </v-flex>
                <v-flex sm12 md6>
                  <div class="text-sm-right">January 2019 -> Ongoing</div>
                </v-flex>
              </v-layout>

            </h3>
            <v-card light>
              <v-layout row wrap>
                <v-flex sm12 md6>
                  <div class="sectionSpacing">
                    <v-card class="grey lighten-2" light>
                      <v-card-text>
                        <p class="black--text tab">Idea was initially developed to help a family member's business.</p>
                        <p class="black--text tab">The front-end was written as a Vue+Typescript project to do a proof of Object Oriented programming in Typescript. The backend was a flask python RESTful API which interacted with a SQL database.</p>
                        <p class="black--text tab">This system is intended to track the movement of inventory amongst different bars within a club.</p>
                        <br>
                        <p class="black--text tab">I am currently still working on improoving the UI and adding backend features for analysis and data collection</p>

                      </v-card-text>
                    </v-card>
                  </div>
                </v-flex>
                <v-flex sm12 md6>
                  <v-img
                  class="centered"
                  :src="getImgPath(barInventoryPhoto)"
                  alt="name and titles"
                  aspect-ratio="1.5"
                  />
                </v-flex>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <h3 slot="header">
              <v-layout row wrap >
                <v-flex sm12 md6>
                  Fruit/Vegetable Ripeness Detection
                </v-flex>
                <v-flex sm12 md6>
                  <div class="text-sm-right">February 2019 -> April 2019</div>
                </v-flex>
              </v-layout>
            </h3>
            <v-card light>
              <v-layout row wrap>
                <v-flex sm12 md6>
                  <v-layout column justify-center fill-height>
                    <div class="sectionSpacing">
                      <v-card class="grey lighten-2" light>
                        <v-card-text>
                          <p class="black--text tab">Project was made initially to detect ripe tomatos but then converted to detect ripe bananas. It was written in python (not the best choice in terms of application speed).</p>
                          <p class="black--text tab">Used hue color space to segment out different colors in the image that werent of a banana. Then analysed shapes in the image using canny edge detection.</p>
                          <p class="black--text tab">Once there were only bananas in the image the item would rate the fruits ripeness through analysis of the Hue color spectrum</p>

                        </v-card-text>
                      </v-card>
                    </div>
                  </v-layout>
                </v-flex>
                <v-flex sm12 md6>
                  <v-img
                  class="centered"
                  :src="getImgPath(bananaPhoto)"
                  alt="name and titles"
                  aspect-ratio="1"
                  max-width="80%"
                  />
                </v-flex>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            <h3 slot="header">

              <v-layout row wrap>
                <v-flex sm12 md6>
                  Space Invaders in C
                </v-flex>
                <v-flex sm12 md6>
                  <div class="text-sm-right">January 2019 -> April 2019</div>
                </v-flex>
              </v-layout>

            </h3>
            <v-card light>
              <v-layout row wrap>
                <v-flex sm12 md6>
                  <div class="sectionSpacing">
                    <v-card class="grey lighten-2" light>
                      <v-card-text>
                        <p class="black--text tab">This project was a part of a class in school</p>
                        <p class="black--text tab">It was written in C and OpenGL for the graphics</p>
                        <p class="black--text tab">One of the more fun projects that I made throughout University which featured shooting, collision detection, acceleration physics game scores.</p>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-flex>
                <v-flex sm12 md6>
                  <v-img
                  class="centered"
                  :src="getImgPath(spaceInvadersPhoto)"
                  alt="name and titles"
                  aspect-ratio="1.5"
                  />
                </v-flex>
              </v-layout>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-content>

    </div>

    <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->

</template>

<script>
export default {
  name: 'Work',
  data () {
    return {
      panel: [true, false, true, true, true],
      msg: 'This is Kevins Vue App',
      nameTag: 'NameTag.png',
      schoolLogo: 'UoGlogo.png',
      schoolName: 'UoGname.png',
      profilePhoto: 'weddingSmile.jpg',
      hometownPhoto: 'Pombal.jpg',
      codingPhoto: 'codingKevin.jpeg',
      bananaPhoto: 'bananaAlgorithm.png',
      spaceInvadersPhoto: 'spaceInvaders.png',
      barInventoryPhoto: 'barInventory.png'
    }
  },
  methods: {
    getImgPath (filename) {
      return require('@/assets/' + filename)
    }
  },
  mounted: function() {
    let utcDate = (new Date().toUTCString()).split(' ')
            utcDate.pop()
            console.log(new Date(utcDate));
  }
}
</script>

<style scoped lang="css">

  h1 {
    font-weight: 1000;
    font-size: 50px;
    margin-top: 40px;
  }

  h2 {
    font-weight: 800;
    font-size: 40px;
  }

  h3 {
    font-weight: 800;
    font-size: 30px;
  }

  p {
    color: #bfbfbf;
    font-size: 25px;
  }

  .tab { text-indent:40px }

  .buttonFont {
    font-family: Perpetua;
    font-size: 20px;
  }

  .invertedColor{
    filter: invert(1);
  }

  .centered {
    margin: auto;
  }

  .jumboWord{
    font-weight: 800;
    font-size: 35px;
  }

  .paddedTop {
    margin-top: 20px;
  }

  .paddedImage {
    margin: 30px;
  }

  .paddedIcon {
    margin-right: 10px;
  }

  .paddedBottom {
    margin-bottom: 30px;
  }

  .sectionSpacing {
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .sectionInformation{

  }

  .noMargin {
    margin: 0;
  }

</style>
