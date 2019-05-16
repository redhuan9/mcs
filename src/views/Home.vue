<template>
  <div class="home">
    <h1 class="subheading grey--text">TM Global - MCS 1 Dashboard</h1>

    <v-container>
      <iframe
        width="1024"
        height="768"
        src="https://app.powerbi.com/view?r=eyJrIjoiYjU3YzJkZTUtYTk2Mi00ZDRhLThkNDItMWMwYzZjMmNjNjUxIiwidCI6IjE4Y2U3NmY2LTk5ZjQtNDU3Zi05ZjYyLWFjZDY1ZDliOTc3NyIsImMiOjEwfQ%3D%3D"
        frameborder="0"
        allowfullscreen="true"
      ></iframe>
    </v-container>
    <!-- <v-container class="my-2">
      <v-btn flat round color="grey">
        <span>Sign In</span>
        <v-icon right>touch_app</v-icon>
      </v-btn>
    </v-container>-->
    <!-- <v-container class="md-5">
      <i class="fas fa-intersection"></i>
        <v-toolbar-title class="subheading grey--text">State selection</v-toolbar-title>
        </p>
          <v-autocomplete
            :loading="loading"
            :items="items"
            :search-input.sync="search"
            v-model="select"
            cache-items
            class="mx-4"
            flat
            hide-no-data
            hide-details
            label="Location?"
            solo-inverted
          ></v-autocomplete>
    </v-container>-->

    <!-- <v-btn flat round color="grey">
            <span>Search</span>
            <v-icon right>search</v-icon>
          </v-btn>
          <v-btn flat round color="grey">
            <span>Clear</span>
            <v-icon right>loop</v-icon>
    </v-btn>-->
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       loading: false,
//       items: [],
//       search: null,
//       select: null,
//       states: [
//         "Perlis",
//         "Kedah",
//         "Pulau Pinang",
//         "Perak",
//         "Selangor",
//         "Kuala Lumpur",
//         "Negeri Sembilan",
//         "Melaka",
//         "Johor",
//         "Pahang",
//         "Terengganu",
//         "Kelantan",
//         "Sabah",
//         "Sarawak",
//         "Labuan"
//       ]
//     };
//   },
//   watch: {
//     search(val) {
//       val && val !== this.select && this.querySelections(val);
//     }
//   },
//   mounted() {
//     this.loadData();
//   },
//   methods: {
//     loadData() {},
//     querySelections(v) {
//       this.loading = true;
//       // Simulated ajax query
//       setTimeout(() => {
//         this.items = this.states.filter(e => {
//           return (e || "").toLowerCase().indexOf((v || "").toLowerCase()) > -1;
//         });
//         this.loading = false;
//       }, 500);
//     },
//     clear() {
//       document.getElementById("home").reset();
//     }
//   }
// };
// export default {
//   name: 'home',
//   components: {
//   },
//   data(){
//     return {
//     keyword: ''
//   }
//   },
//   computed:{
//   exchanges(){
//     return this.$store.state.infra_store.exchanges.filter(rec => rec['SITE NAME'].toLowerCase().indexOf(this.keyword.toLowerCase()) > -1)
//   },
//   isLoading(){
//     return this.$store.state.infra_store.loading
//   }
// }
// }
</script>
