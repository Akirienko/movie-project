import { log } from "console"

export const useUser = defineStore('user', {
  state: () => {
    return {
      isLoggedIn: false
    }
  },
  getters: {},
  actions: {
    login(name: string, password: string) {
      if(name == 'test' && password == 'test') {
        this.isLoggedIn = true;
        useRouter().push("/")
      } else {
        alert('USERNAME:test and PASSWORD:test');
      };
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}