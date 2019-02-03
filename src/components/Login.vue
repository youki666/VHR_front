<template>
	<div class="container">
    <div class="row">
        <div class="col-md-4 col-md-offset-4" style="margin: 380px 380px">
            <div class="login-panel panel panel-default" >
                <div class="panel-heading">
                    <h3 class="panel-title" style="text-align: center;">登录</h3>
                </div>
                <div class="panel-body">
                    <div  id="login_form">
                        
                            <div class="form-group">
                                <input class="form-control" placeholder="用户名:admin" name="username" autofocus v-model="userInfo.userName">
                            </div>
                            <div class="form-group">
                                <input class="form-control" placeholder="密码:1234" name="password" type="password" v-model="userInfo.passWord">
                            </div>
                            <!-- Change this to a button or input when using this as a form -->
                             
                                <div  class="btn btn-lg btn-default btn-block" id='login_btn'  @click="doLogin">Submit</div>  
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>

 export default{
 	name:"login",
 	data(){
 		return {
 			userInfo:{
 				userName:'',
 				passWord:'',
 			}
 		}
 	},
 	methods:{
 		 doLogin (){
              if (this.userInfo.userName == ''){
                alert('用户名不能为空');
                return false
          }
          if (this.userInfo.passWord == ''){
              alert('密码名不能为空');
              return false
          }
          if('admin' ==this.userInfo.userName && '1234' ==this.userInfo.passWord ){
            this.$router.replace({path: '/home'});
          }else{
            alert('用户名或密码错误,请重新输入!');
          }
             
 		 }
 	}
 }

</script>