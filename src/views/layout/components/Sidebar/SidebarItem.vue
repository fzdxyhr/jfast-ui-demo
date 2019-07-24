<template>
	<div class="menu-wrapper">
      <router-link :to="{ name: 'demo' }">
         <el-menu-item index="1">
         	<i class="icon el-icon-bell"></i><span slot="title">测试</span>
         </el-menu-item>
      </router-link>
	</div>
</template>

<script>
	export default {
  }
</script>
<style scoped>
  .icon {
    vertical-align: 0px;
    padding-right: 5px;
  }
</style>