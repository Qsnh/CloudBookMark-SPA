<style>
	.title { text-align: center; line-height: 200px; }
</style>

<template>
	<Row type="flex" align="middle" justify="center">
		<i-col span="8">
			<h1 class="title"><img src="../images/logo.png" width="200" height="60" :alt="web.name"></h1>

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

				<Form-item label="密码" prop="password_confirmation">
					<i-input type="password" :value.sync="user.password_confirmation" placeholder="请再输入一次密码">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item>
		            <i-button type="ghost" @click="loginSubmit('formValidate')" long>注册</i-button>
		        </Form-item>

		        <Form-item>
		        	<a v-link="{name: 'login'}">有账号？点击登录</a>
		        </Form-item>
			</i-form>
		</i-col>
	</Row>
</template>

<script>
	export default {
		data() {
			return {
				user: {
					email: '',
					password: '',
					password_confirmation: ''
				},
				formValidate: {
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
				}
			}
		},
		methods: {
			loginSubmit (name) {
				this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
			}
		}
	}
</script>