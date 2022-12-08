<template>
    <div class="container-fluid">
      <topBar/>
      <div class="chat-container">
            <section class="chat">
                    <div class="chat__inner">
                        <div class="chat__message chat__message_B" style="--delay: 1s;">
                        <div class="chat__content">
                            <p> You have selected Dana Hall 101 as the destination </p>
                        </div>                        
                    </div>                    
                    <div class="chat__message chat__message_B" style="--delay: 3s;">
                        <div class="chat__content">                            
                            <p> Would you like to proceed? </p>
                        </div>
                    </div>
                    <div class="chat__message chat__message_A" style="--delay: 6s;">
                        <div class="chat__content">
                            <p> Yes! </p>
                        </div>  
                    </div>
                <div class="chat__message chat__message_B" style="--delay: 8s;">
                    <div class="chat__content">
                        <p> Finding possible routes... </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 12s;">
                    <div class="chat__content">
                        <p>3 routes detected </p>
                    </div>           
                </div>
                <div class="chat__message chat__message_B" style="--delay: 15s;">
                    <div class="chat__content">
                        <p> Route A has an ETA of 7 minutes</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 17s;">
                    <div class="chat__content">
                        <p>Route B has an ETA of 5 minutes.</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 17s;">
                    <div class="chat__content">
                        <p>Route C is your saved preference and has an ETA of 4 minutes.</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 19s;">
                    <div class="chat__content">
                        <p> Please make a route selection</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_A" style="--delay: 22s;">
                    <div class="chat__content">
                        <p > Route C </p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 24s;">
                    <div class="chat__content">
                        <p> Alright!</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 27s;">
                    <div class="chat__content">
                        <p>Navigating to your destination via Route C </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 30s;">
                    <div class="chat__content">
                        <p>Please walk straight, there is a left turn ahead in approximately 10 feet</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 35s;">
                    <div class="chat__content">
                        <p>Slow down, be prepared to take a left turn in 5..4..2..2..1.. </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_A" style="--delay: 40s;">
                    <div class="chat__content">
                        <p> Alright! </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 43s;">
                    <div class="chat__content">
                        <p> Make a left turn now</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 46s;">
                    <div class="chat__content">
                        <p>'Loud crash detected!</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 49s;">
                    <div class="chat__content">
                        <p> Hey Jason, we detected a loud crashing sound.</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 51s;">
                    <div class="chat__content">
                        <p> Are you ok?</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 51s;">
                    <div class="chat__content">
                        <p>Do you need some assitance?</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 53s;">
                    <div class="chat__content">
                        <p>Contacting emergency services if a response is not recorded within 10 seconds</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 55s;">
                    <div class="chat__content">
                        <p>10..9..8..7..6..5..4..3..2..1 </p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 55s;">
                    <div class="chat__content">
                        <p>Contacting emergency contact set with Highest severity level </p>
                    </div>
                </div>
                    </div>
            </section>
        </div>

      
    
      <bottomBar/>
    </div>
  </template>
  <script>
  import topBar from './topBar'
  import bottomBar from './bottomBar.vue'
  import './animationstyle.css'
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
  