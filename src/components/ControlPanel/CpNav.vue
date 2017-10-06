<template>
  <div class="layout">
    <mu-appbar title="VMS">
        <img src="../../assets/logo.png" height="50" class="logo">
        <div class="title">VMS</div>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="Video">
           <mu-menu-item title="Upload"/>
          <mu-menu-item title="Modify"/>
        </mu-menu-item>
        <mu-menu-item title="User">
           <mu-menu-item title="Change Password"/>
        </mu-menu-item>
      </mu-icon-menu>
    </mu-appbar>
    <div class="content">
      <div class="content-left">
        <mu-list @change="handleListChange"  :value="activeList">
          <mu-list-item toggleNested title="Video" value="videos">
            <mu-list-item slot="nested" value="upload" title="Upload"></mu-list-item>
            <mu-list-item slot="nested" value="modify" title="Modify"></mu-list-item>
          </mu-list-item>
          <mu-list-item toggleNested title="User" value="users">
            <mu-list-item slot="nested" value="changePwd" title="Change Password"></mu-list-item>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="main">
        <cp-upload></cp-upload>
      </div>
    </div>
  </div>
</template>
<script>
import CpUpload from './CpUpload'
export default {
  data(){
    return {
      activeList: 'videos'
    }
  },
  methods:{ 
    handleListChange (val) {
      this.activeList = val;
    }
  },
  components:{
    CpUpload
  }
}
</script>
<style scoped>
.layout{
  height: 100vh;
}
/* header{
  height: 100px;
  vertical-align: top;
  padding: 10px;
  font-size: 2.3em;
  display: flex;
} */
mu-icon-menu{
  color: #fff !important;
}
.logo{
  vertical-align: middle;
  display: inline-block;
}
.title{
  line-height: 80px;
  display: inline-block;
  color: white;  
}
.content{
  display: flex;
  height: calc(100% - 100px);
}
.content-left{
  display: inline-block;
  width: 13%;
  min-width: 120px;
}
.main{
  background: #000;
  display: inline-block;
  width: 87%;
}
</style>