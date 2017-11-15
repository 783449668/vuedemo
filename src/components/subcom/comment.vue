<template>
	<div id = "tmpl">
		<!--评论组件-->
		<!--1.0 实现提交评论数据到服务器的静态结构-->
		<div id="postcomment">
			<h3>提交评论</h3>
			<p class="p"></p>
			<textarea placeholder="请输入您要评论的内容..." v-model="postcontent"></textarea>
			<mt-button type="primary" size="large" @click="postcomment">发表</mt-button>
		</div>

		<!--2.0 实现获取评论数据列表-->
		<div id="list">
			<h3>评论列表</h3>
			<p class="p"></p>
			<div v-for="(item,index) in list">
				<div class="title">
					<span>第{{index + 1}}楼:</span>
					<span>用户：{{item.user_name}}</span>
					<span>发表时间：{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
				</div>
				<ul class="mui-table-view">
					<li class="mui-table-view-cell" v-text="item.content"></li>
				</ul>
			</div>
		</div>

		<!--3.0 实现获取更多按钮-->
		<mt-button type="danger" size="large" plain @click="getmore">加载更多</mt-button>
	</div>
</template>
<script>
	import common from '../../kits/common.js';
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				pageindex:1,
				postcontent:'',
				list:[]
			}
		},
		props:['id'],
		created(){
			this.getcommentlist(this.pageindex);
		},
		methods:{
			getmore(){
				//1.0 实现this.pageindex值的增加1
				this.pageindex++;
				

				//2.0 获取当前this.pageindex值对应的分页数据
				this.getcommentlist(this.pageindex);

			},
			getcommentlist(pageindex){
				pageindex = pageindex || 1;
				var url = common.apisub+'/api/getcomments/'+this.id+'?pageindex='+pageindex;
				this.$http.get(url).then(function(res){
					if(res.body.status != 0){
						Toast(res.body.message);
						return;
					}
					this.list = this.list.concat(res.body.message);
				});
			},
			postcomment(){
				if(this.postcontent.trim().length <= 0){
					Toast('您要评论的内容不能为空');
					return;
				}
				var url = common.apisub+'/api/postcomment/'+this.id;
				this.$http.post(url,{content:this.postcontent},{
					emulateJSON:true
				}).then(function(res){
					Toast(res.body.message);

					//3.0 将最新的评论数据追加到评论列表的最顶部
				this.list = [{
						"user_name": "匿名用户",
						"add_time": new Date(),
						"content": this.postcontent
					}].concat(this.list);
					this.postcontent ='';
				});
			}
		}
	}
</script>
<style scoped>
	/* 1.0 实现提交评论样式 */
		#postcomment{
			padding: 5px;
		}
			 .p{
				height: 1px;
				width: 100%;
				border-bottom: 1px solid rgba(0,0,0,0.3);
			}

			/*2.0 评论列表的样式*/
		#list{
			padding: 5px;
		}
		.title{
			padding: 5px;
			color: #6d6d72;
			font-size: 15px;
			background-color: rgba(0,0,0,0.1);
		}
</style>