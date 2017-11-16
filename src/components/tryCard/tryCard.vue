<template>
	<div id="tryCard">
		<div class="cardTop">
			<div class="title">我的体验卡<span>分享抢大礼</span></div>
			<!-- <div>分享抢大礼</div> -->
		</div>
		<div class="box">
			<ul>
				<li >
					<div class="order">体验卡订单</div>
					<ul class="list">
						<li>
							<img src="" class="listImg">
						</li>
						<li class="orderDetal">
							<div class="time">2017-10-10  18:40</div>
							<div class="price">￥170</div>
						</li>
						<li class="status">
							<div>进行中</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<style scoped>
	.cardTop{
		position: relative;
	}
	.title{
		width: 100%;
		height: 0.86rem;
		line-height: 0.86rem;
		font-size: 0.3rem;
		color: #333333;
		border-bottom: 0.02rem solid #eee;
		background: #eee;
	}
	.title span{
		color:red;
		font-size: 0.22rem;
		position: absolute;
		right:0.3rem;
	}
	.box{
		background: #eeeeee;
		min-height:100vh;
	}
	.order{
		background: #fff;
		text-align: left;
		height: 0.7rem;
		font-size: 0.3rem;
		line-height: 0.7rem;
		padding-left: 0.2rem;
	}
	.list{
		background: #fff;
		margin-top: 0.1rem;
		display: flex;
		height: 1.5rem;
		/*line-height: 1.5rem;*/
	}
	.listImg{
		width: 1.2rem;
		height: 1.2rem;
		background: red;
		border-radius: 0.2rem;
		margin-top: 0.2rem;
	}
	.orderDetal{
		width:4rem;
		text-align: left;
		margin-left: 0.2rem;
	}
	.time{
		font-size: 0.26rem;
		color: #999;
		margin-top: 0.3rem;
	}
	.price{
		font-size: 0.32rem;
		color: #000;
		margin-top: 0.4rem;
	}
	.status{
		margin-top: 1rem;
		font-size: 0.28rem;
		color: red;
	}
</style>