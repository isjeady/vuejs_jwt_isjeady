<template>
  <div>
    <h1>DASHBOARD</h1>
    <h3>Sei Autenticato:{{ isAuthenticated }}</h3>
    <h3>{{ authStatus }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  props: {

  },
  data () {
    return {
    }
  },
  computed:{
     ...mapGetters([
          'isAuthenticated',
          'authStatus',
      ]),
  },
  created : function (){
    console.log("created");
    
    /*
    if(!this.isAuthenticated){
        this.$router.replace('/');
    }
    */
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
