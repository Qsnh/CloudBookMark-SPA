import config from './api-config' 

let api = {
	//注册
	register: config.host + config.prefix + '/user/add',
	//登录
	login: config.host + '/oauth/token',
	// 用户信息
	user: config.host + config.prefix + '/user',
	// 更换密码
	change_password: config.host + config.prefix + '/user/change_password',
	// 分类聚合
	category: {
		get: config.host + config.prefix + '/category',
		add: config.host + config.prefix + '/category/add',
		find: config.host + config.prefix + '/category/{id}/find',
		edit: config.host + config.prefix + '/category/{id}/edit',
		delete: config.host + config.prefix + '/category/{id}/delete',
		// 获取分类 + 书签
		bookmarks: config.host + config.prefix + '/category?include=bookmarks'
	},
	// 书签聚合
	bookmark: {
		add: config.host + config.prefix + '/bookmark/add',
		delete: config.host + config.prefix + '/bookmark/{id}/delete'
	}
}

let client = {
	client_id: '2',
	client_secret: 'nJ4tZilqoGklPw2vUtDSOEyWCZ511ynoXAD0SwJx'
}

export default {
	api: api,
	client: client
};