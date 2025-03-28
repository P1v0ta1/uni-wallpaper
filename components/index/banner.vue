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
</style>