<template>
   <div class="login">
        <mu-auto-complete v-model="username" hintText="Please input your username" required></mu-auto-complete>
        <mu-auto-complete v-model="password" hintText="Please input your password" required></mu-auto-complete>
        <br/>
        <mu-raised-button label="Log in" @click="login()" fullWidth primary/>    
   </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: ''
    } 
  },
  methods:{
    login: function(){
      if(this.username && this.password){
        this.$http.get('/xx', {"username": this.username, "password": this.password}).then(
          res => {
            console.log(res)
          },
          res => {
            console.error(res)
          }
      )
      }
      else{
        console.log('more params are needed');
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
