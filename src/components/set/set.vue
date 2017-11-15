<template>
	<div id="tmpl">
		设置
		<router-link to="/login">
		    <mt-button type="primary" class="login" >登录</mt-button>  
        </router-link>
		<router-link to="/register">
		    <mt-button type="danger" class="register">注册</mt-button>
        </router-link>
		
	</div>
		
		
</template>

<script>
	export default{

	}
</script>

<style scoped>
	.login{
		width:100%;
	}
	.register{
		width:100%;
	}
</style>