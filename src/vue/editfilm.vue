<template>
    <div>
        <router-link to="/"><button>Liste des films</button></router-link>
        <p>Modifier le film<br/>
            <input type="text" v-model="movie_to_display.title" placeholder="Titre"/><br/>
            <input type="text" v-model="movie_to_display.poster" placeholder="Adresse Poster"/><br/>
            Année: <input type="number" v-model="movie_to_display.year" min="1895" max="2018"/><br/>
            <input type="text" v-model="movie_to_display.realisateur.nom" placeholder="Nom Realisateur"/><br/>
            <input type="text" v-model="movie_to_display.realisateur.nationalite" placeholder="Nationalité"/><br/>
            <input type="text" v-model="movie_to_display.realisateur.naissance" placeholder="Date Naissance"/><br/>
            <input type="text" v-model="movie_to_display.genre" placeholder="Genre(s)"/><br/>
            <input type="text" v-model="movie_to_display.langue" placeholder="Langue(s)"/><br/>
            <textarea v-model="movie_to_display.synopsys" placeholder="Synopsis"></textarea><br/>
            Note(sur 5): <input type="number" v-model="movie_to_display.note" min="1" max="5">
        </p>
        <button v-on:click="saveModif">Sauvegarder les modifications</button>
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
          movies() {
              return this.$store.state.movies
          },
          movie_to_display() {
              return this.$store.state.movie_to_display
          },
      },
      methods: {
          saveModif: function () {
              this.$store.state.movies.splice(this.$store.state.nb, 1);
              this.$store.state.movies.push(this.$store.state.movie_to_display);
          },
      }
  }

</script>
