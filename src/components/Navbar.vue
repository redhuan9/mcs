<template>
  <nav>

    <v-toolbar flat app>
      <v-toolbar-side-icon @click="drawer = !drawer" class="grey--text"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Special</span>
        <span>Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn> -->
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="blue lighten-3">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/TMG_ani.gif" alt="">
          </v-avatar>
          <p classs="white--text subheading mt-1">TM Global</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'folder', text: 'Our Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ]
    }
  }
}
</script>