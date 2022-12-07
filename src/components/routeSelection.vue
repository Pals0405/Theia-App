<template>
    <div class="container-fluid">
        <topBar/>
        <div class="chat-container">
            <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
          <p class="chat_dest text-left"> You have chosen Sloan Hall Room 101 as your destination </p>
          <p class="chat_dest text-left"> Would you like to proceed? </p>
        </div>
        </div>  
        <div class="col-6"><p class="user_chat_dest text-left"> Yes! </p></div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-9">
            <p class="chat_dest text-left"> Finding routes...<br>2 routes detected </p>
            <p class="chat_dest text-left"> Route A is your saved preference and has ETA of 2 minutes, Route B has ETA of 5 minutes.</p> 
            <p class="chat_dest text-left"> Make a route selection</p>
        </div>
        </div>
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
        <div class="row">
            <div class="col-3"></div>
        <div class="col-9">
          <p class="chat_dest text-left"> Make a right turn now</p>
          <p class="chat_dest text-left">You are now approaching your destination</p>
          <p class="chat_dest text-left"> Slow down, you have now reached Sloan Hall Room 101. </p>
        </div>
        </div>
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
  name: 'routeSelection',
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
   navigateRoute(){
   
      }
  }
}
</script>