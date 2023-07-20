<script setup>

const emit = defineEmits(["closeModal"]);

const closeModal = () => {
    emit("closeModal");
};

</script>

<template>
  <ModalComponent>
    <div class="bg-white rounded-lg p-20 flex flex-col items-center">
      <h2 class="text-2xl font-bold mb-2">Please Login</h2>
      <div class="flex mt-4">
        <button @click="closeModal" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button>
        <NuxtLink to="/login" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-5">Login</NuxtLink>
      </div>
    </div>
  </ModalComponent>
</template>