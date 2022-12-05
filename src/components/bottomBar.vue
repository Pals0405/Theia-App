<template>
    <div class="row fixed-bottom" id="bottomBarStyle">
        <div class="col-4">
             <i class="bi bi-hand-index" style="font-size:3.5rem;"></i>
        </div>
        <div class="col-4">
             <i class="bi bi-mic-fill" style="font-size:3.5rem;"></i>
        </div>
        <div class="col-4">
            <i class="bi bi-chat" style="font-size:3.5rem;"></i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'bottomBar',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bottomBarStyle{
    padding-bottom: 20;
}
</style>
