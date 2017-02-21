<style>
.spin-container { position: fixed; top: 0px; left: 0px; z-index: 11; width: 100%; height: 100%; }
</style>

<template>
	<!-- 加载条 -->
	<div class="spin-container" v-show="loading">
		<Spin fix></Spin>
	</div>
</template>

<script>
export default {
	props: ['loading'],
	data () {
		return {
		}
	}
}
</script>