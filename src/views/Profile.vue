<template>
  <div>
    <h1>Profile</h1>
    <h3>Sei Autenticato:{{ isAuthenticated }}</h3>
    <hr>
    <h3>{{ getUSer }}</h3>
    <h3>{{ getUSer.name }}</h3>
    <h3>{{ getUSer.email }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {FETCH_ME} from '@/store/actions.type'

export default {
  name: 'Profile',
  props: {

  },
  data () {
    return {
    }
  },
  computed:{
     ...mapGetters([
          'isAuthenticated',
          'getUSer',
      ]),
  },
  created : function (){
    console.log("created");
  },
  mounted : function (){
    this.$store.dispatch(FETCH_ME);
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
