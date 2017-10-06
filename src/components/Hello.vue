<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <login />
  </div>
</template>

<script>
import Login from './Login';

export default {
  name: 'hello',
  components: {
    Login
  },
  data() {
    return {
      msg: 'Welcome to Video Management System',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
