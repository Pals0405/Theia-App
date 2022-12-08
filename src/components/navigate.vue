<template>
    <div class="container-fluid">
        <topBar/>
        <div>
            <div class="col-6"><p class="user_chat_dest text-left"> Route A </p></div>
            <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
          <p class="chat_dest text-left"> Alright!<br>Navigating to your destination via Route A </p>
          <p class="chat_dest text-left">Keep walking straight. There is a right turn in approximately 20 feet</p>
          <p class="chat_dest text-left"> Slow down, be prepared to take the right turn in 10, 9, 8, 7, 6, 5, 4, 3, 2, and 1 </p>
        </div>
        </div>
        <div class="col-6"><p class="user_chat_dest text-left">Alright! </p></div>
        <div class="col-9">
          <p class="chat_dest text-left"> Make a right turn now</p>
          <p class="chat_dest text-left">You are now approaching your destination</p>
          <p class="chat_dest text-left"> Slow down, you have now reached Sloan Hall Room 101. </p>
        </div>
        </div>
        <bottomBar/>
    </div>    
</template>

<script>
import topBar from './topBar'
import bottomBar from './bottomBar.vue'
import './style.css'
export default {
  name: 'navigate',
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
  }
}
</script>