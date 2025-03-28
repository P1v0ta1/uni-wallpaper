<template>
	<view class="title">
		<view class="name">
			<slot name="title"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding:0 30rpx ;
		
		.name{
			font-size: 40rpx;
		}
	}
</style>