<template>
  <div id="app">
    <div id="nav"> | 
      <template v-if="isAuthenticated">
        <router-link :to="{ name : 'Dashboard'}">Dashboard</router-link> | 
        <router-link :to="{ name : 'Profile'}">Profile</router-link> | 
        <a class="router-link-active" @click="logOut">Logout</a> | 
      </template>
      <template v-else>
        <router-link to="/">Login</router-link> |
      </template>
    </div>
    <template v-if="loading">
      <loader></loader>
    </template>
    <template  v-else >
      <router-view/>
    </template>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Loader from '@/components/Loader.vue'
  import {AUTH_LOGOUT} from '@/store/actions.type'
  import ApiService from '@/common/api.service';
  ApiService.init()

  export default {
    name: 'AppHeader',
    components: {
      Loader
    },
    data () {
      return {
        loading : false
      }
    },
    computed:{
      ...mapGetters([
            'isAuthenticated',
        ]),
    },
    methods: {
      logOut() {
        this.loading = true;
        this.$store.dispatch(AUTH_LOGOUT).then( response => {
          this.loading = false;
          this.$router.push({ name: "Login"});
        }).catch(( error ) => {
          this.loading = false;
          this.$router.push({ name: "Login"});
        });
      }
    }
  }
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  border-bottom: 1px solid rgba(0,0,0,1.125);
  margin-bottom: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a:hover{
  text-decoration: underline;
  cursor: pointer;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
