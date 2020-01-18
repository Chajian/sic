<template>
	
	<div style="cursor: pointer;">
		<div :key="index" v-for="(a,index) in activity" class="div-context">
			<img :src="a.data.picture_path" class="img-content" alt="" />
			<label class="label-context">{{a.data.activity_name}}</label>
		</div>
		
		<!-- <div class="div-context">
			<img src="../assets/img/two.jpg" class="img-content" alt="" />
			<label class="label-context">管理活动</label>
		</div>
		
		<div class="div-context">
			<img src="../assets/img/three.jpg" class="img-content" alt="" />
			<label class="label-context">我参加过的互动</label>
		</div>
		
		<div class="div-context"> 
			<img src="../assets/img/four.jpg" class="img-content" alt="" />
			<label class="label-context">扫码签到</label>
		</div> -->
		
	</div>
	
</template>

<script>

import axios from 'axios'
export default{
	data(){
		return {
			activity:[]
		}
	},
	methods:{
		updateArtices: function(){
			var token = window.localStorage.getItem('Authentication')
			alert(token);
			// var instance = axios.create({
			//   baseURL: 'http://localhost:8081/Sic/api/activities',
			//   timeout: 1000,
			//   headers: {'X-Custom-Header': 'foobar'}
			// });
			// instance.get('activities');
			// axios.defaults.headers['ujksjd'] = 'asdfasdfasdfasdf234234234234234';
			// axios.get('http://localhost:8081/Sic/api/activities').then((res)=>{
			// 	this.activity = res.data;
			// 	alert(JSON.stringify(res))
			// })
			// var instance = axios.create({
			//   baseURL: 'https://some-domain.com/api/',
			//   timeout: 1000,
			//   headers: {'jkjk': 'foobar'}
			// });
			var instance = axios.create({
					baseURL: 'http://localhost:8081/Sic/api/',
					timeout: 1000,
					headers: {'Authentication': token}
				});
			instance.get('activities');
		}
	},
	mounted(){
		this.updateArtices();
	}
}
	
</script>

<style>
	.img-content{
		width: 20%;
		height: 10%;
	}
	.label-context{
		position: absolute;
		top: 1px;
		margin-left: 10%;
		margin-top: 5%;
		font-weight: bold;
	}
	.div-context{
		width: 100%;
		height: 10%;
		position: relative;
		display: flex;
		color: #3ECAED;
		margin-left: 30%;
		margin-top: 5%;
	}
	
</style>
