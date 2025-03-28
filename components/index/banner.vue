<template>
	<view class="banner">
		<swiper
			autoplay
			circular
			indicator-dots
			indicator-color="rgba(255,255,255,0.5)"
			indicator-active-color="#ffffff"
			>
			<swiper-item v-for="item in 5">
				<image :src="'/static/b' + item +'.jpg'"mode="widthFix"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.banner{
		width:750rpx;
		margin: 30 rpx 0;
		swiper{
			width: 750rpx;
			height: 750rpx;
			
			swiper-item{
				width: 100%;
				height:100%;
				padding: 0 30rpx;
				
				image{
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}
		}
	}
</style>