<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="addNum">点击</button>
        <p>{{number}}</p>
        
    <router-view/>
  </div>
</template>

<script>
import comp2 from './components/comp2.vue';
import comp3 from './components/comp3.vue';
export default {
  name: 'App',
  data(){
            return{
          
            }
        },
  computed:{
            number(){
                return this.$store.state.number;
            }
        },
        methods: {
            addNum(){
                this.$store.dispatch('updateNum');
            }
        },
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
