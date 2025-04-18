<!-- 通用头部标签元素属性 影响theme.vue select.vue标题 -->
<!-- custom 用于 在标签块其他部分进行自定义修改 -->
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