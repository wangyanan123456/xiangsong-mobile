<template>
	<div id="try">
		<div class="title">体验卡申请</div>
		<img  class="banner" src="./img/banner.png" >
		<form>
		 <ul>
		 	<li class="left">备注:</li>
		 	<li class="right">
		 		<input type="text" placeHolder='其他的需求(选填)' />
		 	</li>
		 </ul>
		 <ul>
		 	<li class="left">手机号</li>
		 	<li class="right">
		 		<input type="text" placeHolder='仅支持中国大陆手机号' />
		 	</li>
		 	<li>
		 		<div class="check">发送验证码</div>
		 	</li>
		 </ul>
		 <ul>
		 	<li class="left">验证码</li>
		 	<li class="right">
		 		<input type="text" placeHolder='请输入验证码' />
		 	</li>
		 </ul>
		 <ul>
		 	<li class="left">所在城市</li>
		 	<li class="right">
		 		<input type="text" placeHolder='北京' />
		 	</li>
		 </ul>
		 <ul>
		 	<li class="left">收货地址</li>
		 	<li class="right">
		 		<input type="text" placeHolder='请选择您的写字楼，小区或学校' @click = 'plice' />
		 	</li>
		 </ul>
		 <ul>
		 	<li class="left">详细地址</li>
		 	<li class="right">
		 		<input type="text" placeHolder='请填写详细门牌号等' />
		 	</li>
		 </ul>
		 <ul>
		 	<li class="left">选择送达时间</li>
		 	
		 </ul>
		 <button>先预定，后付费</button>
		</form>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				
			}

		},
		mounted(){

		},
		methods:{
			plice:function(){
				this.$router.push({
					path: '/place/place'
				})
			}
		}
	}
</script>
<style scoped>
	#try{
		padding-bottom: 0.8rem;
	}
	.title{
		width: 100%;
		height: 0.86rem;
		line-height: 0.86rem;
		font-size: 0.3rem;
		color: #333333;
		border-bottom: 0.02rem solid #eee;
		background: #f6f6f6;
	}
	.banner{
		width: 100%;
		height: 3.5rem;
	}
	form{
		font-size: 0.26rem;
	}
	ul{
		display: flex;
		height: 0.91rem;
		line-height: 1.2rem;
		/*background: red;*/
		border-bottom: 0.01rem solid #c9c9c9;

	}
	ul li:last-child{
		border-bottom: none;

	}
	.left{
		font-size: 0.32rem;
		margin-left: 0.24rem;
		color: #333333;
	}

	.right input{
		margin-left: 0.3rem;
		border: none; 
		font-size: 0.28rem;
	}

	button{
		border: none;
		margin-top: 1.3rem;
		width: 3.95rem;
		height: 0.85rem;
		font-size: 0.28rem;
		color: #fff;
		background: #f4413f;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.check{
		background: #f4413f;
		width: 1.7rem;
		height: 0.6rem;
		line-height: 0.6rem;
		color: #fff;
		margin-top: 0.2rem;
		border-radius: 0.5rem;
		margin-left: -0.2rem;
	}
</style>