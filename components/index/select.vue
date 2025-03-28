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
				   <image :src="'/static/wallpaper/w' + item + '.jpg'"></image>
			   </view>
		   </scroll-view>
	   </view>
   </view>
</template>

<script setup>
	import commonTitleVue from '../common-title/common-title.vue';
</script>

<style>
</style>