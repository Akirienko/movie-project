<script setup>
import { storeToRefs } from 'pinia';

const user = useUser();
const favoriteMovie = favoriteMovies();

// const { favorite, addFavorite } = storeToRefs(favoriteMovie);
const { isLoggedIn } = storeToRefs(user);

console.log('favoriteMovies', favoriteMovie);

const query = ref("batman");
const movies = ref([]);
const loadedPosts = ref(6);
const addNewPosts = 3;
// const favoriteMovies = ref([])

async function search() {
  const { Search } = await $fetch(`http://www.omdbapi.com/?apikey=277a8905&s=${query.value}`);
  movies.value = Search;
}

search();

function loadMore() {
  loadedPosts.value += addNewPosts;
}

const isModalOpen = ref(false);
const closeModal = () => {
    isModalOpen.value = false;
};

const addFavoriteMovie = (el) => {
  if(!isLoggedIn.value) {
    return isModalOpen.value = true;
  }
  favoriteMovie.addFavorite(el);
  console.log(favoriteMovie.favorite);
}
</script>

<template>
  <section class="wrapper m-auto">
    <form @submit.prevent="search" class="mb-10 text-center">
      <input type="text" v-model="query" class="border border-black rounded px-5 py-1 mr-5">
      <button class="border border-black rounded px-5 py-1">Search</button>
    </form>
    <ul class="flex flex-wrap items-center justify-center gap-5">
      <li v-for="movie in movies.slice(0, loadedPosts)" :key="movie.imdbID">
        <NuxtLink :to="`/movies/${movie.imdbID}`">
          <img :src="movie.Poster" :alt="movie.Title">
        </NuxtLink>
        <div class="flex justify-center mt-2.5">
          <button @click="addFavoriteMovie(movie)" class="border border-black rounded px-2.5">Add to favorite</button>
        </div>
      </li>
    </ul>
    <div class="flex justify-center mt-10" v-if="loadedPosts < movies.length">
      <button @click="loadMore" class="border-2 border-black rounded px-10 py-5">Load more</button>
    </div>
  </section>
  <ModalComponent :isOpen="isModalOpen" @close-modal="closeModal"/>
</template>
