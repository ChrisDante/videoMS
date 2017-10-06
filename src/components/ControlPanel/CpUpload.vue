<template>
  <form>
        <mu-auto-complete hintText="Video's name" fullWidth />
        
        <div class="chipContainer">
            <mu-auto-complete hintText="Tag's name" fullWidth />
            <mu-chip class="demo-chip"  @delete="handleClose" showDelete>
                delete chip
            </mu-chip>
            <mu-chip class="demo-chip"  @delete="handleClose" showDelete>
                delete chip
            </mu-chip>
        </div>

  </form>
</template>
<script>
export default {
  name: 'cp-upload',
}
</script>
<style scoped>
    form{
        color: #000;
        padding: 100px;
    }
</style>
