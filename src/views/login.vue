<style>
	.title { text-align: center; line-height: 200px; }
</style>

<template>
	<Row type="flex" align="middle" justify="center">
		<i-col span="8">
			<h1 class="title"><img src="../images/logo.png" width="200" height="60"></h1>

			<i-form v-ref:form-validate :model="user" :rules="formValidate">
				<Form-item label="邮箱" prop="email">
					<i-input :value.sync="user.email" placeholder="请输入邮箱">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item label="密码" prop="password">
					<i-input type="password" :value.sync="user.password" placeholder="请输入密码">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item>
		            <i-button type="ghost" :loading="loading" @click="loginSubmit('formValidate')" long>登录</i-button>
		        </Form-item>

		        <Form-item>
		        	<a v-link="{name: 'register'}">还没有账号？点击注册</a> | <a v-link="{name: 'findpass'}">忘记密码？</a>
		        </Form-item>
			</i-form>
		</i-col>
	</Row>
</template>

<script>
import server from '../config/api'

	export default {
		data() {
			return {
				user: {
					email: '',
					password: ''
				},
				formValidate: {
					email: [
						{required: true, message: '请输入邮箱', trigger: 'blur'},
						{type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请输入密码', trigger: 'blur'},
						{type: 'string', min: 6, max: 16, message: '密码长度在6-16位之间', trigger: 'blur'}
					]
				},
				loading: false
			}
		},
		methods: {
			loginSubmit (name) {
				this.$refs[name].validate((valid) => {
                    if (valid) {
                    	this.loading = true;
                    	this.$http.post(server.api.login, {
                    		'grant_type': 'password',
                    		'client_id': server.client.client_id,
                    		'client_secret': server.client.client_secret,
                    		'username': this.user.email,
                    		'password': this.user.password,
                    		'scope': '*'
                    	}).then((response) => {
                    		// 提交登录状态
                    		this.$store.commit('setAccessToken', response.body.access_token);
                    		this.$Message.success(response.body.message);
                    		setTimeout(() => {
                    			this.$router.go({name: 'account'});
                    		}, 2000);
                    	}, (error) => {
                    		this.$Message.error('网络错误！');
                    	});
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
			}
		}
	}
</script>