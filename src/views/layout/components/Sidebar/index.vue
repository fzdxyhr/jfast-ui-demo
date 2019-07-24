<template>
  <div>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#304156" text-color="#bfcbd9" active-text-color="#409EFF">
      <el-menu-item index="0" class="app-title">
        <i class="icon el-icon-tickets"></i><span slot="title">管理系统</span>
      </el-menu-item>
      <sidebar-item></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
<style scoped>
  .icon {
    font-size: 16px;
    vertical-align: 0px;
    padding-right: 5px;
  }
</style>