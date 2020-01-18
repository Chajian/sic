<template>
	<div class="title" >
		<div class="title_left">
			<a >首页</a>
			<a >论坛</a>
		</div>
	
		<div class="title_center">
			<input type="text" />
			<img src="../assets/img/search.png" width="20px" height="20px"/>
		</div>
		
		<div class="title_right">
			<router-link to="/login">登陆</router-link>
			<router-link to="/register">注册</router-link>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	// import Router from 'vue-router'
	// import Vue from 'vue'
	// Vue.use(Router)
	
	// export default new Router({
	// 	routes:[
	// 		{
				
	// 		}
	// 	]
	// })
</script>

<style>
	.title{
		background-color: #3ECAED;
		border: 1px,solid,black;
		width: 100%;
		text-align: center;
		padding: 10px 24px;

		/* line-height: 30px; */
		/* position: relative; */
		/* margin: 0 auto; */
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	a{
		float: left;
		color: #ffffff;
		text-align: 30px;
		margin: auto 10px;
		font: bold;
	}
	.title_right,.title_center,.title_left{
		margin: 0,auto;
		align-items: center;
		width: 30%;
	}
	.title_left{
	}
	.title_center{
		display: flex;
	}
	.title_right{
	}
</style>
