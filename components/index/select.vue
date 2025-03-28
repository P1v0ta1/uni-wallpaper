<template>
   <view class="select">
	   <commonTitleVue>
		   <template #title>每日精选</template>
		   <template #custom>
			   <view class="date">
				   <uni-icons type="calendar-filled"></uni-icons>
				   <text class="text">
					   <uni-dateformat :date="Date.now()"></uni-dateformat>
				   </text>
			   </view>
		   </template>
	   </commonTitleVue>
	   <view class="content">
		   <scroll-view>
			   <view class="item" v-for="item in 8">
				   <image :src="'/static/wallpaper/w' + item + '.jpg'"mode="aspectfill"></image>
			   </view>
		   </scroll-view>
	   </view>
   </view>
</template>

<script setup>
	import commonTitleVue from '../common-title/common-title.vue';
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
		width: 720rpx;
		margin-left: 30rpx;
		margin-top: 30rpx;
		
		scroll-view{
			white-space: nowrap;
			
			.item{
				width: 200rpx;
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