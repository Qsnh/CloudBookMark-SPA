<style>
	.title { text-align: center; line-height: 200px; }
</style>

<template>
	<Row type="flex" align="middle" justify="center">
		<i-col span="8">
			<h1 class="title"><img src="../images/logo.png" width="200" height="60"></h1>

			<i-form v-ref:form-validate :model="user" :rules="formValidate">
				<Form-item label="呢称" prop="name">
					<i-input :value.sync="user.name" placeholder="请输入呢称">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

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

				<Form-item label="密码" prop="password_confirmation">
					<i-input type="password" :value.sync="user.password_confirmation" placeholder="请再输入一次密码">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item>
		            <i-button type="ghost" :loading="button.loading" @click="loginSubmit('formValidate')" long>{{ button.text }}</i-button>
		        </Form-item>

		        <Form-item>
		        	<a v-link="{name: 'login'}">有账号？点击登录</a>
		        </Form-item>
			</i-form>
		</i-col>
	</Row>
</template>

<script>
import server from '../config/api'
import config from '../config/config'

export default {
	route: {
		data() {
			document.title = '注册 - ' + config.web_name;
		}
	},
	data() {
		return {
			user: {
				name: '',
				email: '',
				password: '',
				password_confirmation: ''
			},
			formValidate: {
				name: [
					{required: true, message: '请输入呢称', trigger: 'blur'},
					{type: 'string', min: 1, max: 10, message: '呢称长度在6-16个字之间', trigger: 'blur'}
				],
				email: [
					{required: true, message: '请输入邮箱', trigger: 'blur'},
					{type: 'email', message: '请输入正确的邮箱', trigger: 'blur'}
				],
				password: [
					{required: true, message: '请输入密码', trigger: 'blur'},
					{type: 'string', min: 6, max: 16, message: '密码长度在6-16位之间', trigger: 'blur'}
				],
				password_confirmation: [
					{validator: (rule, value, callback) => {
						if (!value) {
							return callback(new Error('请输入密码'));
						}
						if (value !== this.user.password) {
							return callback(new Error('两次输入密码不一致'));
						}

						return callback();
					}, trigger: 'blur'}
				]
			},
			button: {
				text: '注册',
				loading: false
			}
		}
	},
	methods: {
		loginSubmit (name) {
			this.$refs[name].validate((valid) => {
                if (valid) {
                    this.button.loading = true;
                    this.$http.post(server.api.register, {
                    	name: this.user.name,
                        email: this.user.email,
                        password: this.user.password,
                        password_confirmation: this.user.password_confirmation,
                    }).then((response) => {
                    	if (response.body.code == 0) {
                    		this.button.text = '跳转中...';
                    		this.$Message.success(response.body.message + '1秒后跳转...');
                    		setTimeout(() => {
                    			this.$route.router.go({name: 'login'});
                    		}, 1000);
                    	} else {
                    		this.button.loading = false;
                    		this.$Message.error(response.body.message);
                    	}
                    }, (error) => {
                    	this.button.loading = false;
                    	this.$Message.error('服务器出错！');
                    });
                } else {
                    this.$Message.error('请输入有效信息！');
                }
            })
		}
	}
}
</script>