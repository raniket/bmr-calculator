<template>
  <v-app>
    <v-layout row>
      <v-flex xs10 offset-xs1 sm6 offset-sm3 mt-4>
        <v-card>

          <!-- title -->
          <v-layout row >
            <v-flex xs10 offset-xs1 sm10 >
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">{{en.home.card.title}}</h3>
                  <div>{{en.home.card.description}}</div>
                </div>
              </v-card-title>
            </v-flex>
          </v-layout>

          <v-divider></v-divider>

          <!-- input form -->
          <v-form  @submit.prevent>
            <!-- weight -->
            <v-layout row pt-2>
              <v-flex xs10 offset-xs1 sm8 offset-sm2>
                <v-text-field v-model="userData.weight" 
                :label="en.home.input.weight" required
                :rules="[hasWeight, weightLimit]" type="number"></v-text-field>
              </v-flex>
            </v-layout>

            <!-- height -->
            <v-layout row>
            <v-flex xs10 offset-xs1 sm8 offset-sm2>
                <v-text-field v-model="userData.height" 
                :label="en.home.input.height" required
                :rules="[hasHeight, heightLimit]" type="number"></v-text-field>
              </v-flex>
            </v-layout>

            <!-- age -->
            <v-layout row>
              <v-flex xs10 offset-xs1 sm8 offset-sm2>
                <v-text-field v-model="userData.age" 
                :label="en.home.input.age" required
                :rules="[hasAge, ageLimit]" type="number"></v-text-field>
              </v-flex>
            </v-layout>

            <!-- gender -->
            <v-layout row>
              <v-flex xs10 offset-xs1 sm8 offset-sm2>
                <v-radio-group v-model="userData.gender">
                  <v-layout row>
                    <v-flex xs4 sm4 lg4 >
                      <v-radio :label="en.home.input.gender.male" :value="`male`" >
                      </v-radio>
                    </v-flex>
                    <v-flex xs4 sm4 lg4 >
                      <v-radio :label="en.home.input.gender.female" :value="`female`" >
                      </v-radio>
                    </v-flex>
                  </v-layout>
                </v-radio-group>
              </v-flex>
            </v-layout>

            <!-- calculate bmr button -->
            <v-layout row>
              <v-flex xs10 offset-xs1 sm8 offset-sm2  pt-2 text-sm-center text-xs-center text-lg-center pb-4>
                <bmr-model :userData="userData"></bmr-model>
              </v-flex>
            </v-layout>
          </v-form>
          
        </v-card>
      </v-flex>
    </v-layout>

  <!-- note -->
  <v-layout row >
    <v-flex xs10 offset-xs1 sm6 offset-sm3>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header">{{en.home.note.title}}</div>
          <v-card>
            <v-card-text>
              {{en.home.note.description}}
              <br>
              {{en.home.note.formulaDetails}}
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-flex>
    </v-layout>

  </v-app>
</template>

<script>
import { en } from '../locals/en.js'
  export default {
    data () {
      return {
        en: en,
        userData: {
          weight: '',
          height: '',
          age: '',
          gender: '',
        }
      }
    },
    computed: {
      hasWeight () {
        return (this.userData.weight === '') ? en.home.errors.hasWeight : true;
      },
      weightLimit () {
        return (this.userData.weight < 1 ) ? en.home.errors.weightLimit: true;
      },

      hasHeight () {
        return (this.userData.height === '') ? en.home.errors.hasHeight : true ;
      },
      heightLimit () {
        return (this.userData.height < 10 || this.userData.height > 250) ? en.home.errors.heightLimit : true;
      },

      hasAge () {
        return (this.userData.age === '') ? en.home.errors.hasAge: true;
      },
      ageLimit () {
        return (this.userData.age < 0 || this.userData.age > 200) ? en.home.errors.ageLimit : true;
      }
    },
    methods: {
    }
  }
</script>
