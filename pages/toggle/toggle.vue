<template>
	<div>
		<a>测试1</a>
		<!-- <img src="./b.png"> -->
		<button @click="cli">dianji </button>
		<a>{{$xx}}</a>
	</div>
	
	
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			console.log(this.$store.state.sum)
			console.log('load')
		},
		methods: {
			ces(){
				
				// this.$store.state.sum  = '你的';
				this.$store.state.sum = this.$store.state.sum + 2 ;
				console.log(this.$store.state.sum)
			}
		}
	}
</script>

<style>
</style>