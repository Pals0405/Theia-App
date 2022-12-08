<template>
    <div class="row sticky-top" id="topBarStyle">
        <div class="col-3">
            <h1 id="theia_topbar"> Theia</h1>
        </div>
        <div class="col-6">
        </div>
        <div class="col-3" id="settingsIcon">
           <a @click="goToSettings()"> <i class="bi bi-gear" style="font-size: 2.5rem;"></i> </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'topBar',
  methods:{
   goToSettings(){
   this.$router.push('/settings');
      }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#theia_topbar{
  font-weight: normal;
  font-family: 'Snell Roundhand';
  font-size: 55;
}
#topBarStyle{
    padding-top: 20;
    padding-bottom: 20;
}
#settingsIcon{
    padding-top: 10;
}
</style>
