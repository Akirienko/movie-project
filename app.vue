<script setup>
  import { storeToRefs } from 'pinia';

  const user = useUser();

  const { isLoggedIn } = storeToRefs(user)

  useHead({
    title: "Movie site"
  })
</script>

<template>
  <div>
    <nav class="mb-10 text-xl font-semibold text-green-800 flex items-center justify-center pt-10 space-x-10">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink  v-if="isLoggedIn" to="/favorite">Favorite</NuxtLink>
      <NuxtLink class="text-green-500" v-if="!isLoggedIn" to="/login">Login</NuxtLink>
      <NuxtLink v-else class="text-red-800" to="/" @click.prevent="user.logout">Logout</NuxtLink>
    </nav>
    <NuxtPage/>
  </div>
</template>
