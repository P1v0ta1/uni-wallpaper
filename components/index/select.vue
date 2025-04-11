<!-- https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html -->
<template>
   <view class="select">
	   <commonTitleVue>
		   <template #title>每日精选</template>
		   <template #custom>
			   <view class="date">
				   <uni-icons type="calendar-filled"></uni-icons>
				   <text class="text">
					   <uni-dateformat :date="Date.now()" format="M月dd日"></uni-dateformat>
				   </text>
			   </view>
		   </template>
	   </commonTitleVue>
	   <view class="content">
		   <scroll-view> <!-- class="Scroll_H" scroll-x="true" @scroll="scroll" scroll-left="120" -->
			   <view class="item" v-for="item in 5"> <!-- 8 个实际-->
				   <image :src="'/static/wallpaper/w' + item + '.jpg'"mode="aspectFill"></image>
			   </view>
		   </scroll-view>
	   </view>
   </view>
</template>

<script setup>
	import commonTitleVue from '../common-title/common-title.vue';
	
	/*methods:{
	scroll: function(e) {
					console.log(e)
					this.old.scrollTop = e.detail.scrollTop
				}
		}	*/	
</script>

<style lang="scss" scoped>
	.select{
		margin-top: 50rpx;
		
		.date{
			display: flex;
			align-items: center;
			
			.text{
				margin-left: 5rpx;
			}
		}
	}
	
	.content{
		width: 750rpx;
		margin-left: 20rpx;
		margin-top: 30rpx;
		
		scroll-view{
			
			
			.Scroll_H{
				white-space: nowrap;
				width: 100%;
			}
			
			.item{
				width: 130rpx;
				height: 450rpx;
				display: inline-block;
				margin-right: 15rpx;
				
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
				
				&:last-child{
					margin-right: 30rpx;
				}
			}
		}
	}
</style>