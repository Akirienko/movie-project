export const useUser = defineStore('user', {
  state: () => {
    return {
      isLoggedIn: ref(false)
    }
  },
  getters: {
    isUserExist: (state) => {
      if(localStorage.getItem("is-user")) {
        state.isLoggedIn = true;
      }

    }
  },
  actions: {
    login(name: string, password: string) {
      if(name == 'test' && password == 'test') {
        this.saveUser();
        useRouter().push("/");
      } else {
        alert('USERNAME:test and PASSWORD:test');
      };
    },
    logout(){
      this.isLoggedIn = false;
      localStorage.removeItem("is-user")
      console.log("data.user", this.isLoggedIn);
    },
    saveUser() {
      this.isLoggedIn = true;
      localStorage.setItem("is-user", JSON.stringify(this.isLoggedIn));
      console.log("data.user", this.isLoggedIn);
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}