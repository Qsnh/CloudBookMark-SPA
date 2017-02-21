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

				<Form-item>
		            <i-button type="ghost" @click="loginSubmit('formValidate')" long>找回密码</i-button>
		        </Form-item>

		        <Form-item>
		        	<a v-link="{name: 'login'}">登录</a> | <a v-link="{name: 'register'}">注册</a>
		        </Form-item>
			</i-form>
		</i-col>
	</Row>
</template>

<script>
import config from '../config/config'

export default {
	route: {
		data() {
			document.title = '找回密码 - ' + config.web_name;
		}
	},
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