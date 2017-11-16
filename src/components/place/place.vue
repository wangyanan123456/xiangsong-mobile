<template>
	<div id="searchPlace">
		<div class="title">搜索地址</div>
        <div class="input-box">
            <img src="./img/search.png"  class="search">
            <input  type="text" class="search-input-place" placeholder="请输入收货的写字楼、小区或学校" />
            <img src="./img/cancel.png" class="cancel">
    	</div>
    	<ul class="list">
    		<li>
    			<div>
    				<img src="">竞园
					<p>广渠路</p>
    			</div>
    		</li>
    	</ul>
	</div>
	
</template>
<script type="text/javascript">
export default{
	name:'Place'
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
</style>