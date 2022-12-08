<template>
  <div class="container-sm">
    <div>
      <h1 id="settings_heading" class="text-center"> Settings </h1>
    </div>
      <section class="settings_section">
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
      <label for="emergency"> Emergency Level 1- Personal Contacts:</label>
      <select name="emergency" id="emergency">
        <option value="level1"> John D</option>
        <option value="level2">Stella G</option>
        <option value="level3"> Cristina S</option>
      </select>
    </div>
    <br />
    <div>
      <label for="language"> Emergency Level 2- Theia Customer Service :</label>

      <button type="button">Tap to call</button>
    </div>
    <br />
    <div>
      <label for="emergency"> Emergency Level 3- 911 Emergency:</label>
      <button type="button">Tap to call</button>
    </div>
    <br />
    <div>

      <label for="Prefer"> Route Preference:</label>
      <select name="prefer" id="prefer">
        <option value="level5"> Less number of turns</option>
        <option value="level6">Less number of obstacles</option>
        <option value="level7"> ETA</option>
      </select>
    </div>
      </section>
    <br />
    <div>
      <button type="button" @click="goToDest()">Save changes</button>
    </div>
    <bottomBar />
  </div>
</template>

<script>

import bottomBar from './bottomBar.vue'
import './style.css'
export default {
  name: 'settings',
  components: {

    bottomBar: bottomBar
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    goToDest() {
      this.$router.push('/dest');
    }
  }
}
</script>