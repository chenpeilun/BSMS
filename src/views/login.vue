<template>
  <div class="login">
  	<div class="login-body">
  		<div class="login-title">后台管理系统登陆页面</div>
  		<div class="login-content">
  			<el-form ref="form" :model="form" :rules="rules"  label-width="0">
	          <el-form-item prop="username" class="login-item">
	            <el-input v-model="form.username" placeholder="请输入账户名：" class="form-input" :autofocus="true"></el-input>
	          </el-form-item>
	          <el-form-item prop="password" class="login-item">
	            <el-input type="password" v-model="form.password" placeholder="请输入账户密码：" class="form-input"></el-input>
	          </el-form-item>
	          <el-form-item class="login-item">
	            <el-button size="large" icon="check" class="form-submit" @click="submit">登陆</el-button>
	          </el-form-item>
        </el-form>
  		</div>
  	</div>
  </div>
</template>
<script type="text/javascript">
export default {
  data () {
    return {
   			form: {
   				username: '',
   				password: ''
   			},
   			rules: {
   				username: [{ required: true, message: '请输入用户名！', trigger: 'blur' }],
   				password: [{ required: true, message: '请输入用户密码！', trigger: 'blur' }]
   			}
    }
  },
  methods: {
     	submit () {

     	}
  }
}
</script>
<style lang="scss" type="text/scss" rel="stylesheet/scss">
  .login {
  	position: absolute;
  	left: 0;
  	top: 0;
  	width: 100%;
  	height: 100%;
  	background-color: #ff6766;
  	.login-body {
  		width: 300px;
  		padding: 25px 15px;
  		margin: 100px auto;
			background-color: #fff;
  		border-radius: 5px;
  		.login-title {
  			margin-bottom: 25px;
        text-align: center;
        font-size: 17px;
			}
		}
  }
</style>
