<template>
	<menu></menu>
	<Row class="pt-60">
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
					<i-input :value.sync="category.name" placeholder="请输入分类名"></i-input>
				</Form-item>

				<Form-item>
		            <i-button type="ghost" :loading="button.loading" @click="loginSubmit('formValidate')">添加分类</i-button>
		        </Form-item>
			</i-form>
		</i-col>

	</Row>
</template>

<script>
import Menu from '../../components/menu.vue'
import server from '../../config/api'
import config from '../../config/config'

export default {
	route: {
		data() {
			document.title = '添加分类 - ' + config.web_name;
		}
	},
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
			},
			button: {
				loading: false
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
                	this.button.loading = true;
                    this.$http.post(server.api.category.add, {
                    	'category_name': this.category.name
                    }, {
                    	headers: {
                    		'Authorization': 'Bearer ' + this.$store.state.access_token
                    	}
                    }).then((response) => {
                    	if (response.body.code == 0) {
                    		this.category = {name: ''};
                    		this.$Message.success(response.body.message);
                    	} else {
                    		this.$Message.error(response.body.message);
                    	}
                    	this.button.loading = false;
                    }, (error) => {
                    	this.button.loading = false;
                    	this.$Message.error('服务其出错！');
                    });
                } else {
                    this.$Message.error('请输入有效信息！');
                }
            })
		}
	}
}
</script>