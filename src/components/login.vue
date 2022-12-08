<template>
    <div class="container-sm">
        <div>
            <h1 id="theia_heading" class="text-center"> Theia </h1>
        </div>
        <div>
            <h1 id="theia_sentence" class="text-center"> Your guide through navigation </h1>
        </div>

         <div>
            <h1 id="login_sentence" class="text-center"> Login to continue </h1>
        </div>
        <div class="row" id="fingerprint_line">
          <div class="col-4"> </div>
          <div class="col-4">
             <a @click="goToDest()"><i class="bi bi-fingerprint center" style="font-size: 6rem;"></i></a>
          </div>
          <div class="col-4">
          </div>
        </div>
        <div class="row fixed-bottom">
          <div class="col-3">
           <i class="bi bi-mic" style="font-size: 3rem;"></i>
          </div>
          <div class="col-6"></div>
          <div class="col-3">
           <i class="bi bi-chat" style="font-size: 3rem;"></i>
          </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
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
#theia_heading{
  font-weight: normal;
  font-family: 'Snell Roundhand';
  font-size: 100;
  padding-bottom: 30;
  padding-top: 100;
  text-align: center;
}
#theia_sentence{
  font-size: 25;
  padding-bottom: 30;
  font-family: 'Comic Sans MS';
}
#login_sentence{
  font-size: 20;
  padding-bottom: 150;
  font-family: 'Comic Sans MS';
}
#fingerprint_line{
  padding-bottom: 100;
}
</style>
