<template>
    <p>Nouveau film<br/>
        <router-link to="/"><button>Liste des films</button></router-link><br/>
        <input type="text" v-model="movie_to_add.title" placeholder="Titre"/><br/>
        <input type="text" v-model="movie_to_add.poster" placeholder="Adresse Poster"/><br/>
        <input type="number" v-model="movie_to_add.year" min="1895" max="2018"/><br/>
        <input type="text" v-model="movie_to_add.realisateur.nom" placeholder="Nom Realisateur"/><br/>
        <input type="text" v-model="movie_to_add.realisateur.nationalite" placeholder="Nationalite"/><br/>
        <input type="text" v-model="movie_to_add.realisateur.naissance" placeholder="Date Naissance"/><br/>
        <input type="text" v-model="movie_to_add.genre" placeholder="Genre(s)"/><br/>
        <input type="text" v-model="movie_to_add.langue" placeholder="Langue(s)"/><br/>
        <textarea v-model="movie_to_add.synopsys" placeholder="Synopsis"></textarea><br/>
        <router-link to="/"><button v-on:click="addMovie">Ajouter à la lise</button></router-link>
    </p>
</template>

<script>

import {zestore} from './store.js'

export default {
  data(){
    return {
      store: zestore
    }
  },
  computed: {
    movies(){
      return this.$store.state.movies
    },
    movie_to_add(){
      return this.$store.state.movie_to_add
    }
  },
  methods: {
    addMovie:function () {
        this.$store.commit('addMovie');
    }
  }
}

</script>
