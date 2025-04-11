<template>
	<view class="theme">
		<commonTitleVue>
			<template #title>专题精选</template>
			<template #custom>
				<navigator url="" class="more">More+</navigator>
			</template>
		</commonTitleVue>
		<themeItemVue
			v-for="item in 8"
			:isMore="false"
			:link=" '/pages/classify/classify' "
			:image="'/static/wallpaper/w' + item +'.jpg'"
			:mask="'专题' + item"
			:tab="'标签' + item">
			
		</themeItemVue>
		<themeItemVue :isMore="true"></themeItemVue>
	</view>
</template> 

<script setup>
	import themeItemVue from '../theme-item/theme-item.vue';
	import commonTitleVue from '../common-title/common-title.vue';
</script>

<style scoped lang="scss">
	.theme {
	        margin-top: 70rpx;
	                
	        .more {
	                 color: #666666;
	                 font-size: 32rpx;
	                }
	                
	        .content {
	                margin-top: 30rpx;
	                padding: 0 30rpx;
	                display: grid;
	                // 3列1行
	                grid-template-columns: repeat(3, 1fr);
	                // 间距
	                gap: 15rpx;
	                }
	        }
</style>