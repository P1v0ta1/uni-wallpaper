<!-- https://ext.dcloud.net.cn/plugin?name=uni-icons所需下载插件 -->
<template>
	<view class="notice">
		<view class="left">
			<uni-icons type="sound-filled"></uni-icons>
			<text class="title">公告</text>
		</view>
		<view class="center">
			<swiper
			autoplay
			circular
			vertical 
			interval="3000"
			duration="300"
			>
			<swiper-item v-for="item in 5">
				<navigator url="/pages/notice/notice">
					<text>第{{item}}条</text>
				</navigator>
			</swiper-item>
			</swiper>
		</view>
		<view class="right">
			<uni-icons type="right" size="16" color="#333"></uni-icons>
		</view>
	</view>
</template>

<script setup>
	import { request } from '../../utils/request.js';
	import {ref} from 'vue';
	
	const noticeList = ref([]);
	
	const getNotice = async() => {
		let result = request({
			URL:'/wallpaper/notice'
		})
	}
</script>

<style lang="scss" scoped>
	.notice{
		width: 700rpx;
		height: 80rpx;
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		margin: 0 auto;
		line-height: 80rpx;
		background-color: #f3f3f3;
		border-radius: 40rpx;
		
		 .left{
			 width:140rpx;
			 display: flex;
			 align-items: center;
			 
			 .title{
				 margin-left: 5rpx;
				 color:#333333;
				 font-size:30rpx;
				 font-weight: 600;
			 }
		 }
		 .center{
			 flex:1;
			 swiper{
				 height:100%;
				 swiper-item{
					 font-size: 30rpx;
					 color:#666666;
					 overflow: hidden;
					 white-space:nowrap;
					 text-overflow: ellipsis;
				 }
			 }
		 }
		 .right{
			 display: flex;
			 justify-content: center;
			 align-items: center;
		 }
	}
</style>