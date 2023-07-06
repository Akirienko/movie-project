<script setup>
  const user = useUser();

  useHead({
    title: "Movie site"
  })
</script>

<template>
  <div>
    <nav class="mb-10 text-xl font-semibold text-green-800 flex items-center justify-center pt-10 space-x-10">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/movies">Movies</NuxtLink>
      <NuxtLink class="text-green-500" v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a v-else class="text-red-800" href="/" @click.prevent="user.isLoggedIn = false">Logout</a>
    </nav>
    <NuxtPage/>
  </div>
</template>
