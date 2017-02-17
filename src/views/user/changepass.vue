<style>
	
</style>

<template>
	<Row class="pt-60">
		<!-- 导航栏 -->
		<i-col span="24">
			<menu></menu>
		</i-col>

		<i-col span="24" class="normal-crossbar">
			<Row>
				<i-col span="22" offset="2">
					<h3>修改密码</h3>
				</i-col>
			</Row>
		</i-col>

		<i-col span="6" offset="9" class="mt-20">
			<i-form v-ref:form-validate :model="user" :rules="formValidate">
				
				<Form-item label="密码" prop="old_password">
					<i-input type="password" :value.sync="user.old_password" placeholder="请输入原密码">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item label="密码" prop="new_password">
					<i-input type="password" :value.sync="user.new_password" placeholder="请输入新密码">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item label="密码" prop="new_password_confirmation">
					<i-input type="password" :value.sync="user.new_password_confirmation" placeholder="请再输入一次密码">
						<Icon type="ios-locked-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item>
		            <i-button type="ghost" @click="loginSubmit('formValidate')">修改密码</i-button>
		        </Form-item>
			</i-form>
		</i-col>

	</Row>
</template>

<script>
import Menu from '../../components/menu.vue';

export default {
	data() {
		return {
			user: {
				old_password: '',
				new_password: '',
				new_password_confirmation: ''
			},
			formValidate: {
				old_password: [
					{required: true, message: '请输入原密码', trigger: 'blur'},
					{type: 'string', min: 6, max: 16, message: '密码长度在6-16位之间', trigger: 'blur'}
				],
				new_password: [
					{required: true, message: '请输入新密码', trigger: 'blur'},
					{type: 'string', min: 6, max: 16, message: '密码长度在6-16位之间', trigger: 'blur'}
				],
				new_password_confirmation: [
					{required: true, message: '请输入再输入一次密码', trigger: 'blur'},
					{validator: (rule, value, callback) => {
							if (!value) {
								return callback(new Error('请输入密码'));
							}
							if (value !== this.user.new_password) {
								return callback(new Error('两次输入密码不一致'));
							}

							return callback();
						}, trigger: 'blur'}
				]
			}
		}
	},
	components: {
		'menu': Menu
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
	},

}
</script>