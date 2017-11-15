<template>
	<div>
		<ul>
			<li>
				<router-link to = '/'>
				    <!-- <div  class="img" :style = "{background: $route.path === '/' ? '/img/icon_home_press@2x.png' : ''}"></div> -->
					<p :style="{color: $route.path === '/' ? 'red' : ''}">我的</p>
				</router-link>
				<router-link to = '/try'>
				    <!-- <div  class="img" :style = "{background: $route.path === '/' ? '/img/icon_home_press@2x.png' : ''}"></div> -->
					<p :style="{color: $route.path === '/try' ? 'red' : ''}">体验卡</p>
				</router-link>
			</li>
		</ul>
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
  bottom: 0rem;
  font-size: 0.2rem;
  background: #fff;
  height: 0.6rem;
  line-height: 0.6rem;
}
.footer ul {
  display: flex;
}
.footer li {
  margin-left: 0.6rem;
  margin-right: 0.5rem;
}
.footer p {
  color: #000;
}
</style>