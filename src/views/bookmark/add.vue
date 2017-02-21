<template>
	<loading :loading="loading"></loading>
	<menu></menu>
	<Row class="pt-60">
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
				        <i-option v-for="category in categories" :value="category.id">{{ category.category_name }}</i-option>
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
		            <i-button type="ghost" :loading="button.loading" @click="loginSubmit('formValidate')">添加</i-button>
		        </Form-item>
			</i-form>
		</i-col>

	</Row>
</template>

<script>
import Menu from '../../components/menu.vue'
import Loading from '../../components/loading.vue'
import server from '../../config/api'
import config from '../../config/config'

export default {
	route: {
		data () {
			document.title = '添加书签 - ' + config.web_name;
			this.$http.get(server.api.category.get, {
				headers: {
					'Authorization': 'Bearer ' + this.$store.state.access_token
				}
			}).then((response) => {
				if (response.body.code == 0) {
					this.categories = response.body.data;
					this.loading = false;
				} else {
					this.$Message.error(response.body.message);
				}
			}, (error) => {
				this.$Message.error('服务器出错！');
			});
		}
	},
	data() {
		return {
			loading: true,
			categories: [],
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
			},
			button: {
				loading: false
			}
		}
	},
	components: {
		'menu': Menu,
		'loading': Loading
	},
	methods: {
		loginSubmit(name) {
			this.$refs[name].validate((valid) => {
                if (valid) {
                	this.button.loading = true;
                    this.$http.post(server.api.bookmark.add, {
                    	'category_id': this.bookmark.category_id,
                    	'bookmark_name': this.bookmark.title,
                    	'bookmark_url': this.bookmark.url
                    }, {
                    	headers: {
                    		'Authorization': 'Bearer ' + this.$store.state.access_token
                    	}
                    }).then((response) => {
                    	if (response.body.code == 0) {
                    		this.bookmark = {
                    			category_id: '',
                    			title: '',
                    			url: ''
                    		};
                    		this.$Message.success(response.body.message);
                    	} else {
                    		this.$Message.error(response.body.message);
                    	}
                    	this.button.loading = false;
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