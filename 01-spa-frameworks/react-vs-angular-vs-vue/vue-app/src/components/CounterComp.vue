<template>
  <div class="counter-app">
    <h1>Counter App</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  }
};
</script>

<style scoped>
.counter-app {
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 20px auto;
  max-width: 300px;
}

button {
  margin: 0 5px;
}
</style>
