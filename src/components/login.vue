<template>
	<div class="main-title" >
		
		<div class="login-info">
			<label>账号:</label>
			<input id="login_account" type="text"/>
		</div>
		<div class="login-info">
			<label>密码:</label>
			<input id="login_pass" type="password"/>
		</div>
		
		<div class="login-info">
			<input type="button" value="登陆" v-on:click="login()"/>
			<input type="button" value="关闭" style="position: relative; margin-left: 30px;"/>
		</div>
		
	</div>
	
	
</template>

<script>
import {mynetwork} from '../myajax/network.js'
export default{
	methods:{
		login:function(){
			var net = mynetwork();
			net.createXml();
			var account = document.getElementById('login_account').value;
			var pass = document.getElementById('login_pass').value;
			var url = "http://localhost:8081/Sic/login?account="+account+'&pass='+pass;
			net.sendRequest(url);
			if(net.mydata.msg=='success'){
				this.$data.uid = net.mydata.data;
				window.localStorage.setItem('Authentication',this.$data.uid);
				alert('登陆成功!'+this.$data.uid);
				this.$router.push({path: '/usercenter'});
			}
			else{
				alert('登陆失败!');
			}
		}
	}
}
	
</script>
	
	

<style>
	div.main-title{
		float: center;
		width: 30%;
		height: 40%;
		border: 3px,solid ,#000000;
	}
	label{
		color: #3ECAED;
	}
	.login-info{
		width: 100%;
		height: 10%;
		float: left;
	}
</style>
