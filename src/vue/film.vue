<template>
    <div>
        <router-link to="/"><button>Liste des films</button></router-link>
        <ul>
            <li v-bind:key="movie_to_display.title">
                <h3>{{ movie_to_display.title }}</h3>
                <img v-bind:src="movie_to_display.poster"/>
                <p>
                  <li><b>{{ movie_to_display.realisateur.nom}}</b></li>
                  <li>{{ movie_to_display.realisateur.naissance}}</li>
                  <li>{{ movie_to_display.realisateur.nationalite}}</li>
                </p>
                <router-link to="/movie/edit"><button>Modifier</button></router-link>
                <button v-on:click="removeMovie">Supprimer</button>
                <p>
                  <li><b>Sorti en:{{ movie_to_display.year }}</b></li>
                  <li><b>Genre(s): </b>{{ movie_to_display.genre }}</li>
                  <li><b>Langues: </b>{{ movie_to_display.langue }}</li>
                  <li><b>Note: </b>{{ movie_to_display.note }}</li>
                </p>
                <b>Synopsys:</b><br/>
                {{ movie_to_display.synopsys }}
            </li>
        </ul><br/>
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
          removeMovie: function () {
              this.$store.commit('removeMovie')
          }
      }
  }

</script>
