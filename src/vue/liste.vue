<template>
    <div>
      <h3> Gestion des films </h3>
      <router-link to="/movie/new">
          <button>Ajouter film</button>
      </router-link>
      <h3>Liste des films</h3>
      <p v-for="(movie, key) in movies" v-bind:key="movie.title" @mouseover="setMovieToDisplay(movie, key)">
        <router-link to="/movie">
          <li>{{ movie.title }}</li>
        </router-link>
      </p>
      <span v-if="movies==0">
        <b>Aucun film enregistré</b>
      </span>
    </div>
</template>

<script>
    import {zestore} from './store.js'

    export default {
        data() {
            return {
                store: zestore
            }
        },
        computed: {
            nb() {
                return this.$store.state.nb
            },
            movies() {
                return this.$store.state.movies
            },
            movie_to_display() {
                return this.$store.state.movie_to_display
            }
        },
        methods: {
            setMovieToDisplay: function (movie, key) {
                this.$store.state.movie_to_display = movie;
                this.$store.state.nb = key;
            }
        }
    }

</script>
