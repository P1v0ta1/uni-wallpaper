<!-- <navigator>用于页面跳转 需要在pages.json中进行注册 -->

<template>
	<navigator class="item":url="link" v-if="!isMore">
		<image class="pic" :src="image" mode="aspectFill"></image>
		<view class="mask">{{ mask }}</view>
		<view class="tab">{{ tab }}</view>
	</navigator>
	
	<navigator class="item more" url="/pages/classify/classify" open-type="switchTab" v-if="isMore">
		<image class="pic" src="/static/wallpaper/w1.jpg" mode="aspectFill"></image>
		<view class="mask">
			<uni-icons type="more-filled" color="#ffffff" size="24"></uni-icons>
			<text class="text">More</text>
		</view>
	</navigator>
</template>

<script setup>
	defineProps({
		//是否显示更多
		isMore:{
			type:Boolean,
			default:false
		},
		//跳转链接
		link:{
			type:String,
			default:"/pages/classify/classify"
		},
		//图片地址
		image:{
			type:String,
			default:"/static/wallpaper/w1.jpg"
		},
		mask:{
			type:String,
			default:"专题名称"
		},
		tab:{
			type:String,
			default:"标签名称"
		}
	})
</script>

<style scoped lang="scss">
	.item{
		height:350rpx;
		border-radius: 10rpx;
		overflow: hidden;  //当元素超出了给定的范围时，隐藏多出来的范围
		position: relative;
	}
	
	.pic{
		width: 100%;
		height: 100%;
	}
	
	.mask{
		width: 100%;
		height:70rpx;
		position: absolute;   
		bottom: 0;
		left: 0;
		color: whitesmoke;
		text-align: center;
		line-height: 70rpx;
		font-size: 30rpx;
		font-weight: 600;
		background-color: rgba(0,0,0,0.2);
		backdrop-filter: blur(20rpx);  //景深效果
	}
	
	.tab{
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		font-size: 22rpx;
		font-weight: 600;
		background-color: rgba(255, 125, 0, 0.7);
		padding: 3rpx 20rpx;
		border-radius: 0 0 10rpx 0;
	}
	
	.text{
		
	}
	
	.item.more{
		.mask{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
		}
	}
</style>