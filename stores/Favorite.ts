export const favoriteMovies = defineStore('favorite', {
  state: () => {
    return {
      favorite: ref([])
    }
  },
  getters: {
    isFavoritExist: (state) => {
      if(localStorage.getItem("favoriteMovie")) {
        state.favorite = JSON.parse(localStorage.getItem("favoriteMovie")!);;
      }
    }
  },
  actions: {
    addFavorite(el: any) {
      this.favorite.push(el);
      localStorage.setItem('favoriteMovie', JSON.stringify(this.favorite));
    },
    removeFavoriteMovie(movie: any) {
      const filteredMovieArr = this.favorite.filter((m: any) => m.imdbID !== movie);
      this.favorite = filteredMovieArr;
      localStorage.setItem('favoriteMovie', JSON.stringify(this.favorite));
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(favoriteMovies, import.meta.hot))
}