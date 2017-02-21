<style>
	.diy-menu { position: fixed; top: 0px; left: 0px; z-index: 11; width: 100%; height: 60px; background-color: #FBFBFB; border-bottom: 1px solid #ddd; }
	/** Overwrite */
	.ivu-menu-light { background-color: #FBFBFB!important; }
	li.ivu-menu-submenu { float: right!important; }
</style>

<template>
	<div class="diy-menu">
		<Row class="top-nav-header">
			<i-col class="cursor" span="6" offset="2" v-link="{name: 'account'}">
				<img src="../images/logo.png" width="200" height="60">
			</i-col>
			<i-col span="14">
				<Menu mode="horizontal" active-key="1">
			        <Submenu key="2">
			            <template slot="title">
			                <Icon type="ios-people"></Icon>
			                {{ username }}
			            </template>
			            <Menu-group title="用户">
			                <Menu-item v-link="{name: 'user.changepass'}" key="2-1">修改密码</Menu-item>
			                <Menu-item @click="logout" key="2-2">安全退出</Menu-item>
			            </Menu-group>
			        </Submenu>
			        <Submenu key="1">
			            <template slot="title">
			                <Icon type="ios-paper"></Icon>
			                我的书签
			            </template>
			            <Menu-group title="书签">
			            	<Menu-item v-link="{name: 'account'}" key="1-1">我的书签</Menu-item>
			                <Menu-item v-link="{name: 'bookmark.add'}" key="1-2">添加书签</Menu-item>
			            </Menu-group>
			            <Menu-group title="分类">
			                <Menu-item v-link="{name: 'category.add'}" key="1-3">添加分类</Menu-item>
			            </Menu-group>
			        </Submenu>
			    </Menu>
			</i-col>
		</Row>
	</div>
</template>

<script>
export default {
	computed: {
		username () {
			return this.$store.state.user.name;
		}
	},
	methods: {
		logout () {
			this.$Modal.confirm({
				title: '警告',
				content: '<p>确定退出当前账号？</p>',
				cancelText: '取消',
				okText: '安全退出',
				onOk: () => {
					this.$store.commit('logout');
					this.$route.router.go({name: 'login'});
				}
			})
		}
	}
}
</script>