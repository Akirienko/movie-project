<script setup>
import { storeToRefs } from 'pinia';

const favoriteMovie = favoriteMovies();

const { favorite } = storeToRefs(favoriteMovie);

const removeFavoriteMovie = (imdbID) => {
  favoriteMovie.removeFavoriteMovie(imdbID);
};
</script>

<template>
  <div class="text-center">
    <h1 class="mb-10">Favorite Movie</h1>
    <ul class="flex flex-wrap items-center justify-center gap-5">
      <li v-for="list in favorite" :key="list.Title">
        <NuxtLink :to="`/movies/${list.imdbID}`">
          <img :src="list.Poster" :alt="list.Title">
        </NuxtLink>
        <div class="flex justify-center mt-2.5">
          <button @click="removeFavoriteMovie(list.imdbID)" class="border border-black rounded px-2.5">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>