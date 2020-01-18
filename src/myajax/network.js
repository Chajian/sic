var o = {
	mydata:{},
	times:0,
	xhr:null
}
var mynetwork = function mynetwork(){
	o.createXml = function(){
		o.xhr = new XMLHttpRequest();
	},
	o.sendRequest = function(url){
		o.xhr.open('POST',url,false); 
		o.xhr.onreadystatechange = function(){//获取数据库传输来的数据,由于要等待请求结束,所以会导致一些方法在此之前执行
			if(o.xhr.status==200&&o.xhr.readyState==4){
				var b = o.xhr.responseText;
				o.mydata = JSON.parse(b);
			}
		}
		o.xhr.send();
	},
	o.getRequest = function(url){
		o.xhr.open('GET',url,true);
		o.xhr.onreadystatechange = function(){ 
			// if(o.xhr.status == 200 && o.xhr.readyState == 4){ 
				return o.xhr.responseText;
			// }
		}
		o.xhr.send();
	}
	return o;
}
export{
	mynetwork
}