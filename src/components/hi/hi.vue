<template>
  	<div>
	    <div class="title" >体验卡申请</div>
		<img :src="banner" class="img">
		<form servlet="" >
			<!-- <input name="weui_switch_value" id="weui_switch_value" type="hidden" checked="checked" /> -->
		    <div class="weui-cells weui-cells_form">
			    <div class="weui-cell">
			        <div class="weui-cell__hd"><label class="weui-label">备注</label></div>
			        <div class="weui-cell__bd">
			            <input class="weui-input" v-model='remarks' name="remarks" type="text" placeholder="其他的需求(选填)">
			        </div>
			    </div>


			    <div class="weui-cell weui-cell_vcode">
			        <div class="weui-cell__hd">
			            <label class="weui-label">手机号</label>
			        </div>
			        <div class="weui-cell__bd">
			            <input class="weui-input" v-model='phonenumber' name="phonenumber" type="tel" placeholder="请输入手机号">
			        </div>
			        <div class="weui-cell__ft">
			            <a href="#" class="weui-vcode-btn" @click='toCode()'>获取验证码</a>
			        </div>
			    </div>
				
				<div class="weui-cell">
			        <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
			        <div class="weui-cell__bd">
			            <input class="weui-input" v-model= 'code' name="code" type="text" placeholder="请输入验证码">
			        </div>
			    </div>

			    <div class="weui-cell">
			        <div class="weui-cell__hd"><label class="weui-label">所在城市</label></div>
			        <div class="weui-cell__bd">
			            <input class="weui-input" v-model='city'  name="city" type="text" placeholder="北京">
			        </div>
			    </div>

			    <div class="weui-cell">
			        <div class="weui-cell__hd"><label class="weui-label">收货地址</label></div>
			        <div class="weui-cell__bd">
			            <input class="weui-input"  @click='toPlace()' v-model='address' name="address" type="text" placeholder="请输入收货地址">
			        </div>
			    </div>

			    <div class="weui-cell">
			        <div class="weui-cell__hd"><label class="weui-label">详细地址</label></div>
			        <div class="weui-cell__bd">
			            <input class="weui-input" v-model='detailaddress' name="detailaddress" type="text" placeholder="请填写门牌号等">
			        </div>
			    </div>

			    <div class="weui-cell">
			        <div class="weui-cell__hd" @click.stop="showWeuiPicker"><label class="weui-label">选择送达时间</label></div>
			        <div class="weui-cell__bd">
			            <!-- <div class="weui-input">{{deliveryTimeFormatted}}</div> -->
			            <input class="weui-input" v-model='deliveryTimeFormatted' name="detailaddress" type="text" placeholder="请填写时间">
			        </div> 
			    </div>

			</div> 
			<button class='button' @click='toTryCode()'>先预定后付费</button>
		</form>
		
  	</div>
</template>

<style scoped>
	.title{
		width: 100%;
		height: 0.86rem;
		line-height: 0.86rem;
		font-size: 0.3rem;
		color: #333333;
		/*border-bottom: 0.02rem solid #eee;*/
	}
	.img{
		width:100%;
		height: 2.5rem;
	}
	.button{
		width: 4rem;
		height: 0.7rem;
		background: red;
		margin-top: 0.6rem;
		/*margin-bottom: 1rem;*/
		border:none;
		border-radius: 0.1rem;
		color: #fff;
		font-size: 0.26rem;
	}
</style>


<script>
	import _ from 'lodash'
	const { picker } = require('@/common/css/weui.min').weui
	require('@/common/css/weui.min.css')
	console.log(picker)
	const dateRange = () => {
	  let i = 0,
	    arr = []
	  let date = new Date()
	  if (date.getHours() >= 14) {
	    date.setDate(date.getDate() + 1)
	  }
	  while (i < 7) {
	    arr.push(date)
	    date = new Date(date)
	    date.setDate(date.getDate() + 1)
	    i++
	  }
	  return arr
	}
	const hoursRange = () => {
	  let i = 8,
	    arr = []
	  while (i < 14) {
	    arr.push(`${i}:00 - ${i + 1}:00`)
	    i++
	  }
	  return arr
	}

	const formatWeek = day => {
	  day = parseInt(day)
	  let char = ['日', '一', '二', '三', '四', '五', '六']
	  return `星期${char[day]}`
	}

	const dateRangeRaw = dateRange()
	const dateRangeArray = dateRangeRaw.map((item, index) => {
	  return {
	    label: `${item.getMonth()+1} - ${item.getDate()+1} ${formatWeek(
	      item.getDay(),
	    )}`,
	    value: index,
	  }
	})
	const hoursRangeArray = hoursRange().map((item, index) => {
	  return {
	    label: item,
	    value: index,
	  }
	})

	const cache = {}

	export default {
	  name: 'Hi',
	  data() {
	    return {
	      isShow: false,
	      remarks: null,
	      phonenumber: null,
	      code: null,
	      city: '北京',
	      address: null,
	      detailaddress: null,
	      deliveryTimeArr: [0, 0],
	      banner:''
	      // deliveryTimeFormatted:null
	    }
	  },
	 mounted(){
			// this.deliveryTimeFormatted = this.deliveryTimeFormatted
	 	
	 		$.ajax({
				 	type:'GET',
				 	url:'/api/apply',
				 	data:{
				 		pid:3177,
				 		sale:13522179270
				 	},
				 	success:function(res){
		                console.log(res)
		                this.banner= res.data.showimg
		                console.log(res.data.showimg)
				 	}
			})
			

	 
	 },
	  computed: {
	    deliveryTimeFormatted() {
	      return `${dateRangeArray[this.deliveryTimeArr[0]]
	        .label} - ${hoursRangeArray[this.deliveryTimeArr[1]].label}`
	    },
	  },
	  methods: {
	    showWeuiPicker() {
	      const self = this
	      cache.deliveryTimeArr = _.clone(this.deliveryTimeArr)
	      picker(dateRangeArray, hoursRangeArray, {
	        defaultValue: [0, 0],
	        onChange: result => {
	          self.deliveryTimeArr = [result[0].value, result[1].value]
	          console.log(self.deliveryTimeArr)
	        },
	      })
	    },
	    // 获取验证码
	    toCode:function(){
	    	console.log(this.phonenumber)
	    	$.ajax({
				 	type:'POST',
				 	url:'/api/send',
				 	data:{
				 		type:2,
				 		mobile:this.phonenumber
				 	},
				 	success:function(res){
		                console.log(res)
				 	}
			})

	    },
    // 跳转到搜索地图
	    toPlace:function(){
	    	this.$router.push({
					path: 'place'
				})
	    },
	    toTryCode:function(){
	    	console.log('提交信息')
	    	$.ajax({
				 	type:'POST',
				 	url:'/api/applycard',
				 	data:{
				 		pid:3177,
				 		mobile:this.phonenumber,
				 		code:this.code,
				 		besttime:this.deliveryTimeFormatted,
				 		city:this.city,
				 		buyerremark:this.remarks,
				 		receiving_address:this.address,
				 		detailed_address:this.detailaddress,
				 		lng:116,
				 		lat:39,
				 		sale:13522179270,
				 		sid:13522179270

				 	},
				 	success:function(res){
		                console.log(res)
				 	}
			})

	  
	    }
	  },
	}
</script>
