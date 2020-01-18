<template>
	
	<label id="label_qiandao" v-on:click="qiandao()">
		签到
	</label>
	
</template>

<script>
	import {mynetwork} from '../myajax/network.js'
	export default{
		methods:{
			qiandao:function(){
				var net = mynetwork();
				net.createXml();
				net.sendRequest('http://localhost:8081/Sic/test?id=1');
				if(net.mydata.msg=='success'){
					this.$data=net.mydata.data;
					alert(net.mydata);
				}
				else if(net.mydata.msg=='fail'){
					alert('您已经签到过了');
				}
			}
		}
	}

</script>

<style>
	label{
		background-color: #3ECAED;
		
	}
</style>
