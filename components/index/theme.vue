<!-- 专题精选部分 -->

<template>
	<view class="theme">
		<commonTitleVue>
			<template #title>专题精选</template>
			<template #custom>
				<navigator url="/pages/classify/classify" open-type="switchTab" class="more">More+</navigator>
				<!-- open-type="switchTab" 调整原本tabbar栏跳转问题  用法：跳转到tabbar页面 并关闭其他非tabbar页面-->
				<!-- https://uniapp.dcloud.net.cn/api/router.html#switchtab 文档-->
			</template>
		</commonTitleVue>
		<!-- 调用commmonTitleVue来封装处理标题块 -->
		
		<view class="content">
		<themeItemVue
			v-for="item in 8"
			:isMore="false"
			:image="'/static/wallpaper/w' + item +'.jpg'"
			:mask="'专题' + item"
			:tab="'标签' + item">
		</themeItemVue>
		
		<themeItemVue :isMore="true"></themeItemVue>
		</view>
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