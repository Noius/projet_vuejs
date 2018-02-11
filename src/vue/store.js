import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const zestore = new Vuex.Store({
    state: {
        movie_to_add: {realisateur:{}},
        movie_to_edit: undefined,
        movie_to_display: {realissateur:{}},
        search: "",
        nb: 0,
        movies: [
            {
                title: "Les Indestructibles",
                poster:"http://fr.web.img6.acsta.net/c_215_290/medias/nmedia/18/35/23/97/18391267.jpg",
                year: 2004,
                langue: "Vo:Anglais, Vf existante",
                genre: "Animation, Action, Comédie, Famille",
                realisateur: {
                  nom:"Brad Bird",
                  naissance:"September 24, 1957",
                  nationalite:"Etats-unien"
                },
                synopsys: "Bob Paar était jadis l'un des plus grands super-héros de la planète. Tout le monde connaissait Mr. Indestructible, le héros qui, chaque jour, sauvait des centaines de vies et combattait le mal. Mais aujourd'hui, Mr. Indestructible est un petit expert en assurances qui n'affronte plus que l'ennui et un tour de taille en constante augmentation.Contraint de raccrocher son super costume quinze ans plus tôt à la suite d'une série de lois ineptes, Bob et sa femme, Hélène, ex-Elastigirl, sont rentrés dans le rang et s'efforcent de mener une vie normale avec leurs trois enfants. Rongeant son frein, rêvant de repasser à l'action, Bob bondit sur l'occasion lorsqu'une mystérieuse convocation l'appelle sur une île lointaine pour une mission top-secret. Il va découvrir que derrière cette alléchante proposition, se cache un génie malfaisant avide de vengeance et de destruction.",
                note:5
            },
            {
                title: "Star Wars Episode VI: Le Retour Du Jedi",
                poster:"http://fr.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/41/62/18422602.jpg",
                year: 1983,
                langue: "Vo:Anglais, Vf existante",
                genre: "Science fiction, Aventure, Fantastique",
                realisateur: {
                  nom:"Richard Marquand",
                  naissance:"17 Avril 1938",
                  nationalite:"Britannique"
                },
                synopsys: "L'Empire galactique est plus puissant que jamais : la construction de la nouvelle arme, l'Etoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis. Han, Leia, Chewbacca, C-3PO et Luke, devenu un Jedi, s'envolent dès lors pour une mission d'extrême importance sur la lune forestière d'Endor, afin de détruire le générateur du bouclier de l'Etoile de la Mort et permettre une attaque des pilotes de l'Alliance rebelle. Conscient d'être un danger pour ses compagnons, Luke préfère se rendre aux mains de Dark Vador, son père et ancien Jedi passé du côté obscur de la Force. ",
                note:5
            },
        ],
    },
    mutations: {
        addMovie:state => {
            state.movies.push(state.movie_to_add);
            state.movie_to_add = {};
        },
        removeMovie:state => {
            state.movies.splice(state.nb, 1);
        },
    }
});
