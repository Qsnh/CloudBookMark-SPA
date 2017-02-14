/**
 * Created by aresn on 16/8/22.
 */
const routers = {
    '/index': {
    	name: 'index',
        component (resolve) {
            require(['./views/index.vue'], resolve);
        }
    },
    '/login': {
    	name: 'login',
    	component(resolve) {
    		require(['./views/login.vue'], resolve);
    	}
    },
    'register': {
    	name: 'register',
    	component(resolve) {
    		require(['./views/register.vue'], resolve);
    	}
    },
    'forgetpass': {
    	name: 'findpass',
    	component(resolve) {
    		require(['./views/findpass.vue'], resolve);
    	}
    }
};
export default routers;