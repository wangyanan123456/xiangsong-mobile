<template>
	<div class="footer">
		<!-- <ul>
			<li>
				<router-link to = '/try'>
				    <div  class="img" :style = "{background: $route.path === '/' ? '/img/icon_home_press@2x.png' : ''}"></div>
					<p :style="{color: $route.path === '/try' ? 'red' : ''}">体验卡</p>
				</router-link>
				
			</li>
			<li>
				<router-link to = '/'>
				    <div  class="img" :style = "{background: $route.path === '/' ? '/img/icon_home_press@2x.png' : ''}"></div>
					<p :style="{color: $route.path === '/' ? 'red' : ''}">我的</p>
				</router-link>
			</li>
		</ul> -->
	</div>
</template>
<script type="text/javascript">
export default {
  name: 'Foot'
}
</script>
<style scoped>
.footer {
  position: fixed;
  width:100%;
  bottom: 0rem;
  font-size: 0.2rem;
  background: #f7f7fa;
  height: 0;
  /*height: 0.8rem;*/
  /*line-height: 0.8rem;*/
  border-top:0.02rem solid #dcdbe0;
  z-index: 100;
}
.footer ul {
  display: flex;
  border-top:0.02rem solid #dcdbe0;
}
.footer li {
  margin-left: 1.5rem;
  margin-right: 0.5rem;
}
.footer p {
  color: #000;
}
</style>