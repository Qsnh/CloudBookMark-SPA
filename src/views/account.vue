<template>
	<loading :loading.sync="loading"></loading>
	<menu></menu>
	<Row type="flex" class="pt-60">
		<i-col class="mt-10" span="20" offset="2" v-for="(key, category) in categories">
			<Card class="mt-10">
				<div slot="title">
					<Poptip trigger="hover">
						<span>{{ category.category_name }}</span>
						<div slot="content">
							<i-button type="warning" v-link="{name: 'category.edit', params: {id: category.id}}" size="small">编辑</i-button>
							<i-button type="error" @click="deleteCategory(key, category)" size="small">删除</i-button>
						</div>
					</Poptip>
				</div>
				<Row class="lh-40">
					<i-col span="6" v-for="(index, bookmark) in category.bookmarks.data">
						<Poptip trigger="hover">
							<a v-link="bookmark.bookmark_url" target="_blank">{{ bookmark.bookmark_name }}</a>
							<div slot="content">
								<i-button type="error" @click="deleteBookmark(index, category.bookmarks.data, bookmark)" size="small">删除</i-button>
							</div>
						</Poptip>
					</i-col>
				</Row>
			</Card>
		</i-col>
	</Row>
</template>

<script>
import Menu from '../components/menu.vue';
import Loading from '../components/loading.vue';
import server from '../config/api';

export default {
	route: {
		data() {
			this.$http.get(server.api.category.bookmarks, {
				headers: {
					'Authorization': 'Bearer ' + this.$store.state.access_token
				}
			}).then((response) => {
				if (response.body.code == 0) {
					this.loading = false;
					this.categories = response.body.data;
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
			categories: [],
			loading: true
		}
	},
	components: {
		'menu': Menu,
		'loading': Loading
	},
	methods: {
		deleteCategory(index, category) {
			this.$Modal.confirm({
                title: '警告',
                content: '<p>确定删除该分类？该分类下的所有书签都将被删除！</p>',
                loading: true,
                onOk: () => {
                    this.$http.delete(server.api.category.delete.replace('{id}', category.id), {
                    	headers: {
                    		'Authorization': 'Bearer ' + this.$store.state.access_token
                    	}
                    }).then((response) => {
                    	// 关闭对话框
                    	this.$Modal.remove();
                    	if (response.body.code == 0) {
                    		this.categories.splice(index, 1);
                    		this.$Message.success(response.body.message);
                    	} else {
                    		this.$Message.error(response.body.message);
                    	}
                    }, (error) => {
                    	this.$Message.error('服务器出错！');
                    });
                }
            });
		},
		deleteBookmark(index, container, bookmark) {
			this.$Modal.confirm({
                title: '警告',
                content: '<p>确定删除该书签？</p>',
                loading: true,
                onOk: () => {
                    this.$http.delete(server.api.bookmark.delete.replace('{id}', bookmark.id), {
                    	headers: {
                    		'Authorization': 'Bearer ' + this.$store.state.access_token
                    	}
                    }).then((response) => {
                    	// 关闭对话框
                    	this.$Modal.remove();
                    	if (response.body.code == 0) {
                    		container.splice(index, 1);
                    		this.$Message.success(response.body.message);
                    	} else {
                    		this.$Message.error(response.body.message);
                    	}
                    }, (error) => {
                    	this.$Message.error('服务器出错！');
                    });
                }
            });
		}
	}
}
</script>