<template>
  <div class="container-sm">
    <topBar/>
    <div>
      <h1 id="settings_heading" class="text-center"> Settings </h1>

    </div>
    <div>
    <h1 id="settings_sentence" class="text-center"> Please apply the following changes: </h1>
    <label for="language"> Choose a language:</label>
      <select name="language" id="language">
        <option value="english">English</option>
        </select>

    </div>
    <div class="slidecontainer">
            <p>Adjust Volume of instructions:</p>
            <input type="range" min="1" max="100" value="50">
            </div>
            <div>
            <label for="speed"> Speed of instructions:</label>
                       <select name="speed" id="speed">
                         <option value="low">Low</option>
                         <option value="med">Med</option>
                         <option value="high">High</option>
                         </select>
                         </div>
    <div>
<label for="language"> Emergency Levels:</label>
                         <select name="emergency" id="emergency">
                         <option value="level1">Level 1</option>
                         <option value="level2">Level 2</option>
                         <option value="level3"> Level 3</option>
                         </select>



    </div>



    <bottomBar/>
</div>
  </template>

<script>

import bottomBar from './bottomBar.vue'
export default {
name: 'settings',
components:{

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
#settings_heading{
font-weight: normal;
font-family: 'Snell Roundhand';
font-size: 40;
padding-bottom: 20;
padding-top: 10;
text-align: left;
}
#settings_sentence{
font-size: 20;
padding-bottom: 30;
font-family: 'Comic Sans MS';

}
#language{
font-size: 12;
padding-bottom: 2;
font-family: 'Comic Sans MS';
}
#fingerprint_line{
padding-bottom: 100;
}
</style>
