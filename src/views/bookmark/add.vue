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
					<h3>添加书签</h3>
				</i-col>
			</Row>
		</i-col>

		<i-col span="6" offset="9" class="mt-20">
			<i-form v-ref:form-validate :model="bookmark" :rules="formValidate">

				<Form-item label="书签分类" prop="category_id">
					<i-select :model.sync="bookmark.category_id" placeholder="请选择书签分类">
				        <i-option v-for="item in categories" :value="item.id">{{ item.name }}</i-option>
				    </i-select>
				</Form-item>

				<Form-item label="书签名" prop="title">
					<i-input :value.sync="bookmark.title" placeholder="请输入书签名">
					</i-input>
				</Form-item>

				<Form-item label="书签地址" prop="url">
					<i-input :value.sync="bookmark.url" placeholder="请输入书签地址">
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
			categories: [
				{name: '分类一', id: 1},
				{name: '分类二', id: 2}
			],
			selected_category: '',
			bookmark: {
				category_id: '',
				title: '',
				url: ''
			},
			formValidate: {
				category_id: [
					{type: 'integer', message: '请选择书签分类', trigger: 'blur'}
				],
				title: [
					{required: true, message: '请输入书签名', trigger: 'blur'}
				],
				url: [
					{required: true, message: '请输入书签地址', trigger: 'blur'},
					{type: 'url', message: '请输入有效URL', trigger: 'blur'}
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