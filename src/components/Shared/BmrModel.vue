<template>
  <div>
    <v-dialog persistent v-model="dialog" width="500" >
        <!-- modal activator btn -->
        <v-btn slot="activator"   flat type="sumit" class="primary" round @click="onSubmit" :disabled="!formIsValid" >
          {{en.modal.submitButton}}
        </v-btn>

      <v-card>
        <!-- modal title -->
        <v-card-title class="headline grey lighten-2" primary-title>
        <span v-if="!formIsValid">{{en.modal.header.unvalid}}</span>
        <span v-if="formIsValid">{{en.modal.header.valid}}</span>
        </v-card-title>

        <!-- modal body -->
        <v-card-text>
          <span v-if="!formIsValid">{{en.modal.body.unvalid}}</span>
          <span v-if="formIsValid">{{en.modal.body.valid}} <b>{{ bmr}} kcal/day</b>.</span>
        </v-card-text>

        <v-divider></v-divider>

        <!-- modal close btn -->
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="dialog = false">
            {{en.modal.closeButton}}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { en } from '../../locals/en.js'
export default {
  props: ['userData'],
  data () {
    return {
      dialog: false,
      en: en,
    }
  },
  methods: {
    onSubmit: function () {
      this.$store.dispatch('calculateBmr', this.userData);
    }
  },
  computed: {
    bmr: function() {
      return this.$store.getters.bmr;
    },
    formIsValid () {
      return (this.userData.weight !== '' && this.userData.height !== '' && this.userData.age !== '' && this.userData.gender !== '' && this.userData.weight > 0 && this.userData.height > 10 && this.userData.height <= 250 && this.userData.age >= 0 && this.userData.age <= 200 );
    },
  }
}
</script>

