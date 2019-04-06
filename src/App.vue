<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <app-header type="2" msg="Hello I am <span style='color:#6f7698'>Mostafa Khalid Raihan</span>"/>
    <app-header type="3" msg="I am a <span style='color:#39864a'>Full Stack Web Developer</span>"/>
    <app-button btn-text="View My Work" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/Header.vue';
import AppButton from './components/Button.vue';

export default {
  name: 'app',
  components: {
    AppHeader,
    AppButton
    // HelloWorld
  },
  data(){
    return {
      msg : 'Hello I am Mostafa Khalid Raihan and I am a Full stack web developer'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
