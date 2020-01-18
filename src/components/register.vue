<template>
 <div>
  <div class="div-context">
   <label>活动名:</label>
   <input type="text" />
  </div>
  <div class="div-context">
   <label>活动类型:</label>
   <select>
    <option>签到</option>
   </select>
  </div>
  <div class="div-context">
   <label>描述:</label>
   <input type="text" />
  </div>
  
  <div class="div-context">
   <input id="f1" type="file" accept="image/*" ref="myfile"/>
   
  </div>
  <div id="progress">
   <span class="red">
    
   </span>
  </div>
  
  <div class="div-context">
   <input type="button" v-on:click="submitUpload()" value="提交" style="position: relative;"/>
   <input type="button" value="取消" style="position: absolute; margin-left: 10%;"/>
  </div>
  
 </div>
</template>

<script>
 
export default{
 methods:{
  submitUpload:function () {
   
  }
  //绑定提交事件
 }
}

 
</script>

<style>
 .div-context{
  display: flex;
  width: 100%;
 }
 
 
</style>