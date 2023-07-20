<script setup>


const props = defineProps({
  isOpen: Boolean
});

</script>

<template>
  <div v-if="isOpen">
    <div  class="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <div class="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
      <slot></slot>
    </div>
  </div>
</template>