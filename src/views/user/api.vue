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
					<h3>API密钥</h3>
				</i-col>
			</Row>
		</i-col>

		<i-col span="6" offset="9" class="mt-20">
			<i-form>
				<Form-item label="我的密钥">
					<i-input disabled :value="user.api_secret"></i-input>
				</Form-item>

				<Form-item>
					<i-button type="ghost" @click="confirm">点击更换</i-button>
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
				api_secret: 'asdasdasnlk123'
			}
		}
	},
	methods: {
		confirm() {
			this.$Modal.confirm({
                title: '警告',
                content: '<p>确定更换API密钥？</p>',
                loading: true,
                onOk: () => {
                    //
                }
            });
		}
	},
	components: {
		'menu': Menu
	}
}
</script>