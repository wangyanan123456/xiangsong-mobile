<template>
	<div id="shenQing" v-cloak>
		<div class="title">体验卡申请</div>
		<img  class="banner" src="./img/banner.png" >
		<form>
			 <ul class="ul">
			 	<li class="left">备注:</li>
			 	<li class="right">
			 		<input type="text" name="xuqiu" v-model = 'other' placeHolder='其他的需求(选填)' />
			 	</li>
			 </ul>
			 <ul class="ul">
			 	<li class="left">手机号</li>
			 	<li class="right">
			 		<input type="text"  autocomplete="off"  name="phoneNumber" v-model = 'phoneNumber' v-on:focus="inpuPhoneNumber" placeHolder='仅支持中国大陆手机号' />
			 	</li>
			 	<li>
			 		<div class="check" @click='send()'>发送验证码</div>
			 	</li>
			 </ul>
			 <ul class="ul">
			 	<li class="left">验证码</li>
			 	<li class="right">
			 		<input type="text"  name="checkCode" placeHolder='请输入验证码' />
			 	</li>
			 </ul>
			 <ul class="ul">
			 	<li class="left">所在城市</li>
			 	<li class="right">
			 		<input type="text"  name='city' placeHolder='北京' />
			 	</li>
			 </ul>
			 <ul class="ul">
			 	<li class="left">收货地址</li>
			 	<li class="right">
			 		<input type="text" name="place" placeHolder='请选择您的写字楼，小区或学校' @click = 'plice' />
			 	</li>
			 </ul>
			 <ul class="ul">
			 	<li class="left">详细地址</li>
			 	<li class="right">
			 		<input type="text"  name="menCode" placeHolder='请填写详细门牌号等' />
			 	</li>
			 </ul>
			 <ul class="uls">
			 	<li class="left last">选择送达时间</li>
			 <!-- 	<group :title="$t('Custom minute list: every 15 minutes')">
			      <datetime v-model="minuteListValue" format="YYYY-MM-DD HH:mm" :minute-list="['00', '15', '30', '45']" @on-change="change" :title="$t('Birthday')"></datetime>
			    </group> -->

			 </ul>
			 <button class="button" @click = 'confirm()'>先预定，后付费</button>
		</form>
	</div>
</template>
<script type="text/javascript">
	export default{

		name:'Hi',
		data(){
			return{
				other:'',
				phoneNumber:'',
				minuteListValue: '2017-06-12 09:00',
			}

		},
		mounted(){
			
		},
		computed:{
		},
		methods:{
			plice:function(){
				console.log(889)
				this.$router.push({
					path: 'place'
				})
			},
			inpuPhoneNumber:function(){
				this.phoneNumber = ''
			},
			confirm:function(){
				console.log(this.phoneNumber)
				
			},
			change (value) {
		      console.log('change', value)
		    },
			send:function(){
				console.log(this.phoneNumber)
				if(!(/^1[34578]\d{9}$/.test(this.phoneNumber))){
					 alert("手机号码有误，请重填");  
        			return false;
				}
				$.ajax({
					type:'POST',
					data:{
						mobile:this.phoneNumber,
						type:2
					},
					url:'/api/send',
					success: (res) => {
						console.log(res)
						
					}
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
	.ul{
		display: flex;
		height: 0.91rem;
		line-height: 1.2rem;
		border-bottom: 0.01rem solid #c9c9c9;

	}
	.uls{
		display: flex;
		height: 0.91rem;
		line-height: 1.2rem;
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

	.button{
		border: none;
		margin-top: 1.3rem;
		width: 3.95rem;
		height: 0.85rem;
		font-size: 0.28rem;
		color: #fff;
		background: #f4413f;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
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