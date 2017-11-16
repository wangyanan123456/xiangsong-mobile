<template>
	<div id="loading">
		<div class="title">登录</div>
		<form>
			<div>
				<img src="./img/phone.png" class="phone ">
				<input type="text"   placeholder='购买体验卡的手机号'/><br/>
			</div>
			<div>
				<img src="./img/code.png" class="code">
				<input type='text'   placeholder='验证码'/>
			</div>
			<button @click = "toTryCard">登录</button>
		</form>

	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Loading',
			methods:{
			 toTryCard:function(){
				this.$router.push({
					path:'isTryCard'
				})
			}
		}
	}
	
</script>
<style scoped>
	.title{
		width: 100%;
		height: 0.86rem;
		line-height: 0.86rem;
		font-size: 0.3rem;
		color: #333333;
		border-bottom: 0.02rem solid #eee;
		background: #f6f6f6;
	}
	form{
		text-align: left;
		padding-left: 0.3rem;
		padding-right:0.5rem;
	}
	form input{
		border:none;
		height: 0.8;
		line-height: 0.8rem;
		width: 5rem;
		/*background: red;*/
		font-size: 0.26rem;
		padding-left: 0.2rem;
	}
	form div{
		display: flex;
		border-bottom:0.01rem solid #999;
	}
	.phone{
		width: 0.4rem;
		height:0.6rem;
		margin-top: 0.1rem;
	}
	.code{
		width: 0.4rem;
		height:0.5rem;
		margin-top: 0.2rem;
	}
	form button{
		margin-top: 0.7rem;
		width:100%;
		height: 0.7rem;
		font-size: 0.28rem;
		border-radius: 0.1rem;
		border:none;
	}
</style>