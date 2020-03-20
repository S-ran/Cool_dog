<template>
  <div id="app">
      <heade/>
      <mains/>
      <foot/>
  </div>
</template>

<script>
import Heade from './views/heade/Head'
import Mains from './views/main/Main'
import Foot from './views/foot/Foot'

export default {
  name: 'App',
  components:{
      Heade,
      Mains,
      Foot
  }
}
</script>

<style>
@import './assets/css/normalize.css';
#app {
  width: 100%;
  height: 100%
}

</style>
