<script setup>
  const user = useUser();
  // const emit = defineEmits(['name', 'password'])
</script>

<template>
   <form @submit.prevent="user.login(name, password)" class="flex flex-col justify-center items-center space-y-5">
    <label for="" class="flex flex-col">
      Username
      <input class="border border-black rounded px-5 py-1" type="text" v-model="name">
    </label>
    <label for="" class="flex flex-col">
      Password
      <input class="border border-black rounded px-5 py-1" type="password" v-model="password">
    </label>
    <button class="border-2 border-black rounded px-10 py-1">Login</button>
  </form>
</template>