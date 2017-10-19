<template>
   <div class="login">
     <div class="container">
        <mu-auto-complete v-model="username" hintText="请输入用户名" required fullWidth></mu-auto-complete>
        <br>
        <mu-auto-complete v-model="password" hintText="请输入密码" required fullWidth></mu-auto-complete>
        <br>
        <div class="picContainer">
          <div>
            <mu-auto-complete class="picans" v-model="picans" hintText="请输入验证码" required fullWidth></mu-auto-complete>                    
          </div>
          <img :src="$data.imgUrl" alt="正在加载验证码" @click="fetchData()" width="74" height="30">
        </div>
        <br/>
        <p class="error">{{ error }}</p>
     </div>
    <mu-raised-button label="Log in" @click="login()" fullWidth primary/>
   </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      error: '',
      imgUrl: null,
      picid: '',
      picans: ''
    } 
  },
  mounted: function(){
    this.fetchData();
  },
  watch: {
    // imgUrl: 'fetchData'
  },
  methods:{
    login: function(){
      if(this.username && this.password && this.picans){
        this.error = '';
        this.$http.post('/192.168.123.34:8080', {"username": this.username, "password": this.password, "picans": this.picans}).then(
          res => {
            console.log(res)
          },
          res => {
            console.error(res)
          }
      )
      }else if(!this.username){
        this.error = '请输入用户名';
      }else if(!this.password){
        this.error = '请输入密码';
      }else if(!this.picans){
        this.error = '请输入验证码';
      }
    },
    fetchData: function(){
      var xhr = new XMLHttpRequest()
      var self = this;
      xhr.open('GET', 'http://192.168.123.34:8080/v1/mv/user/valcode')
      xhr.onload = function () {
        self.imgUrl = JSON.parse(xhr.responseText).data.src;
        self.picid = JSON.parse(xhr.responseText).data.picid;        
      }
      xhr.send()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .container{
    width: 356px;
    display: inline-block;
    text-align: center;
  }
  p.error{
    color: red;
  }
  .picContainer{
    display: inline-block;
    width: 100%;
  }
  .picContainer > div{
    width: 256px;
    float: left;
  }
  .mu-auto-complete .mu-text-field-hint{
    text-align: left !important;
  }
</style>
