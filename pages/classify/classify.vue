<template>
	 <customNavbarVue title="分类"></customNavbarVue>
	 
	<view class="classifyLayout">
		<themeItemVue
			v-for="item in 12"
			:keys="item"
			:mask="'专题'+item"
			:tab="'标签'+item"
		> </themeItemVue>
	</view>
</template>

<script setup>
	import themeItemVue from '../../components/theme-item/theme-item.vue';
	import customNavbarVue from '../../components/custom-navbar/custom-navbar.vue';
</script>

<style scoped lang="scss">
			.classifyLayout{
				padding: 30rpx;
				display: grid;
				grid-template-columns: repeat(3,1fr); //等分三份，1fr用来均分宽度
				gap: 15rpx;
			}
</style>
