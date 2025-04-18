<template>
	<view class="navbar">
		<!-- 状态栏 -->
		<view class="statusBar" :style="{ height: getStatusBarHeight() + 'px' }"></view>
		
		<!-- 标题栏 -->
		<view class="titleBar" :style="{ height: getTitleBarHeight() + 'px'}">
			
			<view class="title">{{ title }}</view>
			<navigator url="/pages/search/search" class="search">
				<uni-icons type="search" size="18" color="#888888" class="icon"></uni-icons>
				<text class="text">搜索</text>
			</navigator>
		</view>
		
	</view>

	<!-- 用一个空的view占位，高度为导航栏的高度 -->
	<view :style="{
                height: getNavBarHeight() + 'px',
                marginBottom: '-15px'
         }"></view>
</template>

<script setup>
	import {
		getStatusBarHeight,
		getNavBarHeight,
		getTitleBarHeight
	} from '../../utils/system';

	defineProps({
		title: {
			type: String,
			default: '壁纸'
		}
	})
</script>

<style lang="scss" scoped>
	.navbar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 999;
		background-color: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(15px);

		.titleBar {
			display: flex;
			align-items: center;
			padding: 0 30rpx;

			.title {
				font-size: 50rpx;
				font-weight: 700;
			}

			.search {
				margin-left: 15rpx;
				width: 400rpx;
				height: 50rpx;
				background-color: rgba(0, 0, 0, 0.1);
				border-radius: 25rpx;
				font-size: 30rpx;
				display: flex;
				align-items: center;
				color: #999999;

				.icon {
					margin-left: 10rpx;
				}

				.text {
					margin-left: 10rpx;
				}
			}
		}
	}
</style>