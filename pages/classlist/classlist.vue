<template>
	<view class="classlistLayout">
		<navigator url="/pages/preview/preview" class="item" v-for="item in 10">
			<image :src="'/static/wallpaper/w' + item + '.jpg'" mode="aspectFill"></image>
		</navigator>
	</view>
</template>

<script setup>

</script>

<style scoped lang="scss">
	.classlistLayout {
		margin: 30rpx;
		display: grid;  //grid 元素垂直分布
		grid-template-columns: repeat(4,1fr);  //1fr是分数单位（Fractional Unit），专门用于分配网格容器中的剩余可用空间
		gap: 15rpx;

		.item {
			height: 450rpx;

			image {
				width: 100%;
				height: 100%;
				border-radius: 10rpx;
			}
		}
	}
</style>