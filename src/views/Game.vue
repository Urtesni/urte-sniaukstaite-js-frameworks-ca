<template>
  <div class="container text-center">
    <div v-if="game" class="col-xs-6 col-md-12">
      <h2>
        {{ game.name }}
      </h2>
      <img :src="game.background_image" class="cover-photo" />
      <p>{{ game.description_raw }}</p>
      <a :href="game.website">Go to original website</a>
    </div>
    <br>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      game: null
    };
  },
  async mounted() {
    const response = await axios.get(
      "https://api.rawg.io/api/games/" + this.$route.params.id
    );
    console.log(response);
    this.game = response.data;
  }
};
</script>

<style scoped>
.container {
  background-color: rgb(224, 220, 213);
  color: rgb(82, 38, 47);
  border: 0.25rem solid rgba(0, 0, 0, 0.125);
  margin-bottom: 3rem;
}

.cover-photo {
  max-width: 400px;
  margin-bottom: 2.5rem;
}
h2 {
  text-transform: uppercase;
  color: rgb(82, 38, 47);
  margin: 2rem;
}
a {
  text-decoration: underline;
  color: rgb(145, 119, 119);
  padding: 1rem;
}
</style>
