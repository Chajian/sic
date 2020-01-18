<template>
 <div>
  <div class="div-context">
   <label>活动名:</label>
   <input id="activity_name" type="text" />
  </div>
  <div class="div-context">
   <label>活动类型:</label>
   <select id="activity_select">
    <option value="1">签到</option>
   </select>
  </div>
  <div class="div-context">
   <label>描述:</label>
   <input id="activity_description" type="text" />
  </div>
  
  <div class="div-context">
   <input id="f1" type="file" accept="image/*" ref="myfile" @change="getFile($event)"/>
   
  </div>
  <div id="progress">
   <span class="red">
    
   </span>
  </div>
  
  <div class="div-context">
   <input type="button" @click="submit($event)" value="提交" style="position: relative;"/>
   <input type="button" value="取消" style="position: absolute; margin-left: 10%;"/>
  </div>
  
 </div>
</template>

<script>
 
import axios from 'axios';
import {mynetwork} from '../myajax/network.js'
export default {

	name: 'HelloWorld',

		data() {

		return {

		msg: 'Welcome to Your Vue.js App',

		file: ''

		}

		},

	methods: {

		getFile: function (event) {

		this.file = event.target.files[0];


		},
		addActivity: function(){
			alert('sdfsdf:'+this.file.name);
			var net = mynetwork();
			net.createXml();
			var name = document.getElementById('activity_name').value;
			var des = document.getElementById('activity_description').value;
			var t = document.getElementById("activity_select");
			var type = t.options[t.selectedIndex].value;
			var url = 'http://localhost:8081/Sic/newActivity?name='+name+'&descrip='+des+'&activitytype='+type+'&picturepath='+this.file.name
			net.sendRequest(url);
			if(net.mydata.msg=='success'){
				alert('新建成功!');
			}
			else{
				alert('新建失败!');
			}
			
		},
		submit: function (event) {

			//阻止元素发生默认的行为
			this.addActivity();
			event.preventDefault();

			let formData = new FormData();

			formData.append("file", this.file);

			axios.post('http://localhost:8081/Sic/inputFile', formData)

			.then(function () {
		

			window.location.reload();

			}).catch(function () {

			alert("上传失败");


			window.location.reload();

			});

		}
		

	}

}
</script>

<style>
 .div-context{
  display: flex;
  width: 100%;
 }
 
 
</style>