<template>
<div class="loader"></div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style>
.loader {
  margin: auto;
  border: 5px solid #43B983;
  border-radius: 50%;
  border-top: 5px solid #FFF;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;
}


/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
