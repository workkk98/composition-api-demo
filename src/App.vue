<template>
  <div id="app">
    <bar />
    <SetupHook />
    <SetupScript />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Bar from './components/bar.vue';
import SetupHook from './components/setup-hook.vue';
import SetupScript from './components/setup-script.vue';

@Component({
  components: {
    Bar,
    SetupHook,
    SetupScript
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
