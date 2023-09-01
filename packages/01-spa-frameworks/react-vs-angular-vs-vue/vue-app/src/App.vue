<template>
  <div class="home">
    <CounterComp />
  </div>
</template>


<script>
import CounterComp from './components/CounterComp.vue'

export default {
  name: 'App',
  components: {
    CounterComp
  }
}
</script>