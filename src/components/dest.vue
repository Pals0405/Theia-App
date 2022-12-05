<template>
  <div class="container-fluid">
    <topBar> </topBar>
    <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
          <p class="chat_dest text-left"> Welcome to Theia, Jane !! </p>
          <p class="chat_dest text-left"> Where are you headed today? </p>
        </div>
    </div>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-dark locationCard">Sloan Hall 101</button>
      </div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-dark locationCard">Sloan Hall 201</button>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-dark locationCard">Sloan Hall 301</button>
      </div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-dark locationCard">Dana Hall 201</button>
      </div>
    </div>
    <br>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-dark locationCard">Dana Hall 101</button>
      </div>
      <div class="col-5">
        <button type="button" class="btn btn-outline-dark locationCard">Dana Hall 201</button>
      </div>
    </div>
    <bottomBar></bottomBar>
  </div>
</template>

<script>
import topBar from './topBar'
import bottomBar from './bottomBar.vue'
export default {
  name: 'dest',
  components:{
    topBar:topBar,
    bottomBar:bottomBar
  },
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
.chat_dest{
  font-size: 20;
  border-radius: 10px;
  background-color: #e9ecef;
  color: black;
  padding: 5 5 10 10;
}
.locationCard{
  background-color: #e9ecef !important;
  font-size: 20;
}
</style>
