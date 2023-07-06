<script setup>

  const route = useRoute();
  const {data} = await useFetch(
    `http://www.omdbapi.com/?apikey=277a8905&i=${route.params.movie}`,
    {
      pick: ["Plot", "Title", "Error", "Poster"],
      key: `/movie/${route.params.id}`,
    }
  );

  if(data.value.Error === "Incorrect IMDb ID.") {
    showError({statusCode: 404, statusMessage: "page Not Found"});
  }

  useHead({
    title: data.value.Title,
  })

</script>

<template>
<div class="">
  <!-- {{$route.params.id}} -->
  {{ data }}
</div>
</template>