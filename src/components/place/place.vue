<template>
	<div id="searchPlace" v-cloak>
		<div class="title">搜索地址</div>
        <div class="input-box">
            <img src="./img/search.png"  class="search">
            <input  type="text" class="search-input-place" placeholder="请输入收货的写字楼、小区或学校" />
            <img src="./img/cancel.png" class="cancel">
    	</div>
    	<!-- <ul class="lists">
    		<li class="list">
    			<div class="mapImg">
    				<img src="./img/map.png">
    			</div>
    			<div class="mapDetal">
	    			<div>竞园</div>
	    			<p>广渠路</p>
    			</div>
    		</li>
    		<li class="list">
    			<div class="mapImg">
    				<img src="./img/map.png">
    			</div>
    			<div class="mapDetal">
	    			<div>竞园</div>
	    			<p>广渠路</p>
    			</div>
    		</li>
    		<li class="list">
    			<div class="mapImg">
    				<img src="./img/map.png">
    			</div>
    			<div class="mapDetal">
	    			<div>竞园</div>
	    			<p>广渠路</p>
    			</div>
    		</li>
    		
    	</ul> -->
	</div>
	
</template>
<script type="text/javascript">
export default{
	data:function(){
		return{

		}
	},
	mounted(){

	},
	computed:{

	}
}
</script>
<style scoped>	
	#searchPlace{
		background: #eeeeee;
		min-height: 100vh;
	}
	.title{
		width: 100%;
		height: 0.86rem;
		line-height: 0.86rem;
		font-size: 0.3rem;
		color: #333333;
		border-bottom: 0.02rem solid #eee;
	}
	.input-box{
	    display: flex;
	    margin-left: 0.3rem;
	    margin-bottom: 0.5rem;
	}
	.search{
		width:0.4rem;
		height: 0.35rem;
		margin-right: 0.2rem;
	}
	.search-input-place{
		width: 4.5rem;
	    font-size:0.27rem;
	    background: #eeeeee;
	    border:none;
	    border-left: 0.01rem solid #999999;
	    padding-left: 0.2rem;
	}
	.cancel{
		width: 0.25rem;
		height: 0.25rem;
		margin-top: 0.05rem;
	}
	.list{
		display: flex;
		text-align: left;
		height: 0.88rem;
		margin-top: 0.1rem;
		padding-left: 0.2rem;
		/*background: red;*/
	}
	.mapDetal{
		margin-left: 0.1rem;
	}
	.mapDetal div{
		font-size: 0.32rem;
		color: #000;
	}
	.mapDetal p{
		font-size: 0.2rem;
		color: #999999;
		margin-top: 0.05rem;
	}
	.mapImg img {
		width: 0.35rem;
		height: 0.35rem;
	}
</style>
