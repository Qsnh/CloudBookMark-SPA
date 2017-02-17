<style>
	
</style>

<template>
	<Row type="flex" class="pt-60">
		<i-col span="24">
			<menu></menu>
		</i-col>

		<i-col class="mt-10" span="20" offset="2">
			<Card class="mt-10">
				<div slot="title">
					<Poptip trigger="hover">
						<span>分类一</span>
						<div slot="content">
							<i-button type="warning" @click="" size="small">编辑</i-button>
							<i-button type="error" @click="deleteCategory" size="small">删除</i-button>
						</div>
					</Poptip>
				</div>
				<Row class="lh-40">
					<i-col span="6">
						<Poptip trigger="hover">
							<a href="https://cloudbookmark.cn" target="_blank">云书签</a>
							<div slot="content">
								<i-button type="error" @click="deleteBookmark" size="small">删除</i-button>
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

export default {
	data() {
		return {
			user: {
				email: '123456@qq.com',
				nickname: '小滕',
			}
		}
	},
	components: {
		'menu': Menu
	},
	methods: {
		deleteCategory() {
			this.$Modal.confirm({
                title: '警告',
                content: '<p>确定删除该分类？该分类下的所有书签都将被删除！</p>',
                loading: true,
                onOk: () => {
                    //
                }
            });
		},
		deleteBookmark() {
			this.$Modal.confirm({
                title: '警告',
                content: '<p>确定删除该书签？</p>',
                loading: true,
                onOk: () => {
                    //
                }
            });
		}
	}
}
</script>