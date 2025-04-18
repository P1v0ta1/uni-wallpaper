<template>
	<!--自定义顶部导航栏 -->
	<custom-navbar></custom-navbar>
	
	<view class="homeLayout">
		<bannerVue></bannerVue>

		<noticeVue></noticeVue>

		<selectVue></selectVue>

		<ThemeVue></ThemeVue>
		
	</view>
</template>

<script setup>
	import bannerVue from '../../components/index/banner.vue';
	import noticeVue from '../../components/index/notice.vue';
	import selectVue from '../../components/index/select.vue';
	import commonTitleVue from '../../components/common-title/common-title.vue';
	import ThemeVue from '../../components/index/theme.vue';
	import customNavbarVue from '../../components/custom-navbar/custom-navbar.vue';
</script>

<style lang="scss">

</style>