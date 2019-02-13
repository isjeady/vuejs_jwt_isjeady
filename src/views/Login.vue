<template>
<div class="col-md-4 col-centered">
    <div class="card">
        <img class="card-img-top" alt="fakeimg.pl" src="https://fakeimg.pl//440x150/282828/43B983/?retina=1&amp;text=Login">
        <div class="card-body">
            <form class="form-app form-signin" @submit.prevent="login">
                <div class="alert alert-danger" v-if="error">{{ error }}</div>
                <loader v-if="loading"></loader>
                <div class="form-group" style="margin-top:20px;">
                    <label for="email">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="email" placeholder="email@example.com"> 
                    </div>
                    <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-green mb-3">Login</button>
                    <div>
                    <router-link to="/signup">Sign up</router-link>
                    <br />
                    <router-link to="/forgot_password">Forgot Password</router-link>
                </div>
            </form>
        </div>
    </div>
 
  </div>
</template>

<script>

import Loader from '@/components/Loader.vue'
import {AUTH_LOGIN} from '@/store/actions.type'
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  components: {
    Loader
  },
  computed:{
     ...mapGetters([
          'isAuthenticated'
      ]),
  },
  created : function (){
    console.log("created");
    if(this.isAuthenticated){
        this.$router.replace('/');
    }
  },
  data () {
    return {
      email: 'vitto.leandro@gmail.com',
      password: '123456',
      error: '',
      loading : false
    }
  },
  updated () {
    
  },
  methods: {
    login () {
        this.loading = true;
        console.log("Login Email: " + this.email + " - Password: " + this.password);
        
        this.$store.dispatch(AUTH_LOGIN, { email: this.email, password: this.password })
            .then(() => {
                this.loading = false;
                this.$router.replace('/');
            })
            .catch(
                error => {
                    console.log("error");
                    console.log(error);
                    this.loginFail(error)
                }
            );
    },
    loginFail(error) {
        console.log(error);
        //this.error = "Credenziali non corrette";
        this.error = (error.response && error.response.data && error.response.data.error) || ''
        this.$store.commit('unsetCurrentUser');
        this.loading = false;
    },
  }
}
</script>

<style lang="css">
.form-signin {
  width: 70%;
  max-width: 500px;
  padding: 10% 15px;
  margin: 0 auto;
}
.col-centered{
    float: none;
    margin: 0 auto;
}
.card {
    border: 1px solid rgba(0,0,0,1.125);
}

.btn-green {
    color: #43B983;
    background-color: #000000;
    border-color: #000000;
}
.btn-green:hover {
    color: #FFF;
    background-color: rgb(30, 82, 59);
    border-color: #000000;
}
</style>
