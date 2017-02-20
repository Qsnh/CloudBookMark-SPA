/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/': {
    	name: 'index',
        component (resolve) {
            require(['./views/index.vue'], resolve);
        },
        auth: false
    },
    '/login': {
    	name: 'login',
    	component(resolve) {
    		require(['./views/login.vue'], resolve);
    	},
        auth: false
    },
    '/register': {
    	name: 'register',
    	component(resolve) {
    		require(['./views/register.vue'], resolve);
    	},
        auth: false
    },
    '/forgetpass': {
    	name: 'findpass',
    	component(resolve) {
    		require(['./views/findpass.vue'], resolve);
    	},
        auth: false
    },
    '/account': {
    	name: 'account',
    	component(resolve) {
    		require(['./views/account.vue'], resolve);
    	},
        auth: true
    },
    '/category/add': {
    	name: 'category.add',
		component(resolve) {
			require(['./views/category/add.vue'], resolve);
		},
        auth: true
    },
    '/user/changepass': {
    	name: 'user.changepass',
		component(resolve) {
			require(['./views/user/changepass.vue'], resolve);
		},
        auth: true
    },
    '/user/api': {
    	name: 'user.api',
		component(resolve) {
			require(['./views/user/api.vue'], resolve);
		},
        auth: true
    },
    '/bookmark/add': {
    	name: 'bookmark.add',
		component(resolve) {
			require(['./views/bookmark/add.vue'], resolve);
		},
        auth: true
    }
};
export default routers;