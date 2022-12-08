<template>
    <div class="container-fluid">
      <topBar> </topBar>
      <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
          <p class="chat_dest text-left"> Selected Dana Hall 101 as the destination </p>
          <p class="chat_dest text-left"> Finding possible routes</p>
          <p class="chat_dest text-left"> Three prossible routes available, Please choose a route from the following Three
            Route A with a ETA of 7 minutes
            Route B with a ETA of 5 minute, Route C with a ETA of 11 minutes and is also a frequently used route 
        </p>
        </div>
        <div class="col-6"><p class="user_chat_dest text-left"> Route C</p></div>
    </div>

    <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
            <p class="chat_dest text-left"> Selected Route C</p> 
            <p class="chat_dest text-left"> Started navigation</p> 
            <p class="chat_dest text-left"> Please walk straight, there is a right turn ahead in 10 feet</p> 
            <p class="chat_dest text-left"> Take a right turn in 6..5..4..2..2..1</p> 
            <p class="chat_dest text-left"> Please take a right turn at this moment</p>
        </div>

        <div class="col-6">
            <p class="user_chat_dest text-left"> ok</p>
            <p class="user_chat_dest text-left">'Loud crashing sound !.!.!' </p>
        </div>
    </div>

    <div class="row">
        <div class="col-3"></div>
        <div class="col-9">
            <p class="chat_dest text-left"> Hey Jason, we detected a loud crash noise.</p> 
            <p class="chat_dest text-left"> Are you ok? or do you need some assitance</p> 
            <p class="chat_dest text-left"> According to prior setting, calling emergency if asnwer not detected in 6..5..4..2..2..1</p> 
            <p class="chat_dest text-left"> Contacting emergency contact set with Highest priority</p> 
        </div>

    </div>>
    
      <bottomBar></bottomBar>
    </div>
  </template>
  <script>
  import topBar from './topBar'
  import bottomBar from './bottomBar.vue'
  import './style.css'
  export default {
    name: 'emergency',
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
     gotoEmergency(){
     this.$router.push('/emergency');
        }
    }
  }
  </script>
  