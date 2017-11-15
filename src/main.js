// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import login from './components/account/login.vue';
import register from './components/account/register.vue';




//导入mitui
import 'mint-ui/lib/style.min.css';
import Mint from 'mint-ui';
Vue.use(Mint);


//导入MUI
import '../statics/mui/css/mui.css';

//导入基本样式
import '../statics/css/site.css';



// 3.0.2 导入路由规则对应的组件对象
import login from './components/account/login.vue';
import register from './components/account/register.vue';
import home from './components/home/home.vue';
import car from './components/shopcar/car.vue';
import news from './components/news/newslist.vue';
import photo from './components/photo/photolist.vue';
import set from './components/set/set.vue';
// 7.0 引入vue-resource， 并绑定， 就会自动在Vue实例上注册一个$http对象
import VueResource from 'vue-resource';
Vue.use(VueResource);

// 8.0 日期格式化
import moment from 'moment';
Vue.filter('datefmt',function(input,fmtstring){
	return moment(input).format(fmtstring)
})

// 3.0.2 定义路由规则
var router1 = new vueRouter({
	linkActiveClass:'mui-active', 
	routes:[
		{path:'/',component:home},
		{path:'/home',component:home},   //首页
		{path:'/shopcar',component:car},   
		{path:'/news/newslist',component:news},
		{path:'/photo/photolist',component:photo},
		{path:'/login',component:login},
		{path:'/register',component:register},
		{path:'/set',component:set},
	]
	});



//导入vue-preview
import VuePreview from 'vue-preview';
Vue.use(VuePreview);


// 3.0 利用Vue对象进行解析渲染
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});

