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
					<h3>添加分类</h3>
				</i-col>
			</Row>
		</i-col>

		<i-col span="6" offset="9" class="mt-20">
			<i-form v-ref:form-validate :model="category" :rules="formValidate">
				<Form-item label="分类名" prop="name">
					<i-input :value.sync="category.name" placeholder="请输入分类名">
						<Icon type="ios-person-outline" slot="prepend"></Icon>
					</i-input>
				</Form-item>

				<Form-item>
		            <i-button type="ghost" @click="loginSubmit('formValidate')">添加</i-button>
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
			category: {
				name: ''
			},
			formValidate: {
				name: [
					{required: true, message: '请输入分类名', trigger: 'blur'},
					{type: 'string', min: 1, max: 5, message: '长度在1-5个字符', trigger: 'blur'}
				]
			}
		}
	},
	components: {
		'menu': Menu
	},
	methods: {
		loginSubmit(name) {
			this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                    setTimeout(function () {
                    	//
                    }, 3000);
                } else {
                    this.$Message.error('表单验证失败!');
                }
            })
		}
	}
}
</script>