<template>
    <div>
        <topBar />
        <div class="chat-container">
            <section class="chat">
                    <div class="chat__inner">
                        <div class="chat__message chat__message_B" style="--delay: 1s;">
                        <div class="chat__content">
                            <p> You have chosen Sloan Hall Room 101 as your destination </p>
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
                        <p>routes detected </p>
                    </div>           
                </div>
                <div class="chat__message chat__message_B" style="--delay: 15s;">
                    <div class="chat__content">
                        <p> Route A is your saved preference and has an ETA of 2 minutes</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 17s;">
                    <div class="chat__content">
                        <p>Route B has an ETA of 5 minutes.</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 19s;">
                    <div class="chat__content">
                        <p> Please make a route selection</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_A" style="--delay: 22s;">
                    <div class="chat__content">
                        <p > Route A </p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 24s;">
                    <div class="chat__content">
                        <p> Alright!</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 27s;">
                    <div class="chat__content">
                        <p>Navigating to your destination via Route A </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 30s;">
                    <div class="chat__content">
                        <p>Keep walking straight. There is a right turn in approximately 20 feet</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 35s;">
                    <div class="chat__content">
                        <p> Slow down, be prepared to take the right turn in 5.., 4.., 3.., 2.., and 1 </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_A" style="--delay: 40s;">
                    <div class="chat__content">
                        <p> Alright! </p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 43s;">
                    <div class="chat__content">
                        <p> Make a right turn now</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 46s;">
                    <div class="chat__content">
                        <p>You are now approaching your destination</p>
                    </div>                    
                </div>
                <div class="chat__message chat__message_B" style="--delay: 49s;">
                    <div class="chat__content">
                        <p> Slow down to a halt in 3.</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 51s;">
                    <div class="chat__content">
                        <p> 2</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 53s;">
                    <div class="chat__content">
                        <p>1</p>
                    </div>
                </div>
                <div class="chat__message chat__message_B" style="--delay: 55s;">
                    <div class="chat__content">
                        <p>You have now reached Sloan Hall Room 101. </p>
                    </div>
                </div>
                    </div>            
            </section>
        </div>
        <bottomBar />
    </div>
</template>

<script>
import topBar from './topBar'
import bottomBar from './bottomBar.vue'
import './animationstyle.css'
export default {
    name: 'routeSelection',
    components: {
        topBar: topBar,
        bottomBar: bottomBar
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        navigateRoute() {

        }
    }
}
</script>