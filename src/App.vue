<template>
  <v-app>
    <!-- content -->
    <v-content app>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {
  },
  name: "App"
};
</script>

<style scoped>

</style>
