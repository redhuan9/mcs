<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">

      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar color="indigo">
                <v-icon dark>account_circle</v-icon>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <!-- <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span class="">Message</span>
              </v-btn>
            </v-card-actions> -->
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Mohd Zaher', role: 'AGM' },
        { name: 'Muhammad Fizrul', role: 'Manager' },
        { name: 'Mohd Zaid Redhuan', role: 'AM' },
        { name: 'Roziana', role: 'AM' },
        { name: 'Tuan Aminah', role: 'AM'},
        { name: 'Siti Amirah', role: 'AM'}
      ]
    }
  }
}
</script>