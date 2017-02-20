import config from './api-config' 

let api = {
	//注册
	register: config.host + config.prefix + '/user/add',
	//登录
	login: config.host + config.prefix + 'oauth/token',
}

let client = {
	client_id: '2',
	client_secret: 'nJ4tZilqoGklPw2vUtDSOEyWCZ511ynoXAD0SwJx'
}

export default {
	api: api,
	client: client
};