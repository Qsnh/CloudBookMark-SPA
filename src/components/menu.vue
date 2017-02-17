<style>
	.diy-menu { position: fixed; top: 0px; left: 0px; z-index: 11; width: 100%; height: 60px; background-color: #FBFBFB; border-bottom: 1px solid #ddd; }
	/** Overwrite */
	.ivu-menu-light { background-color: #FBFBFB!important; }
	li.ivu-menu-submenu { float: right!important; }
</style>

<template>
	<div class="diy-menu">
		<Row class="top-nav-header">
			<i-col span="6" offset="2">
				<img src="../images/logo.png" width="200" height="60">
			</i-col>
			<i-col span="14">
				<Menu mode="horizontal" active-key="1">
			        <Submenu key="2">
			            <template slot="title">
			                <Icon type="ios-people"></Icon>
			                用户中心
			            </template>
			            <Menu-group title="用户">
			                <Menu-item v-link="{name: 'user.changepass'}" key="2-1">修改密码</Menu-item>
			                <Menu-item v-link="{name: 'user.api'}" key="2-2">API密钥</Menu-item>
			                <Menu-item v-link="{name: 'category.add'}" key="2-3">安全退出</Menu-item>
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
}
</script>