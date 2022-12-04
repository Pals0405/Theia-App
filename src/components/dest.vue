<template>
    <div class="container-sm">
       <h1> Where are you headed ?</h1>
    </div>
</template>

<script>
export default {
  name: 'dest',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
   goToDest(){
   this.$router.push('/dest'); 
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
