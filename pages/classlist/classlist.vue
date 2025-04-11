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
	       .classlistLayout{
			   margin: 30rpx;
			   display: grid;
			   grid-template-columns: repeat(3,1fr);
			   gap:15rpx;
			   
			   .item{
				   height: 450rpx;
				   
				   image{
					   width: 100%;
					   height: 100%;
					   border-radius: 10rpx;
				   }
			   }
		   }
</style>
