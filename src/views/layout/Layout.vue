<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
		<sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<navbar></navbar>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  computed: {
  	sidebar() {
  		return this.$store.state.app.sidebar
  	}
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.app-wrapper {
	  position: relative;
	  height: 100%;
	  width: 100%;
	}
  .main-container {
    height: 100%;
  }
</style>
