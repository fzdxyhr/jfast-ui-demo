<template>
	<section class="app-main">
		<transition name="fade" mode="out-in">
			<keep-alive>
				<router-view style="height: 100%;"></router-view>
			</keep-alive>
		</transition>
	</section>
</template>

<script>
	export default {
		name: 'AppMain',
		computed: {}
	}
</script>
<style scoped>
	.app-main {
		height: calc(100% - 50px);
		padding: 15px;
		background: #f2f2f2;
	}
</style>
