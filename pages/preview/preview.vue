<template><!-- https://uniapp.dcloud.net.cn/component/uniui/uni-dateformat.html <uni-dateformat> -->
        <view class="previewLayout">
                <swiper circular>
                        <swiper-item v-for="item in 8">
                                <image :src="'/static/wallpaper/w' + item + '.jpg'"></image>
                        </swiper-item>
                </swiper>

                <view class="mask">
                        <view class="back">
                                <uni-icons type="back" size="20" color="#ffffff"></uni-icons>
                        </view>

                        <view class="count"> 4 / 8</view>  

                        <view class="time">
                                <uni-dateformat :date="Date.now()" format="hh:mm"></uni-dateformat>
                        </view>
						<view class="date">
						        <uni-dateformat :date="Date.now()" format="yyyy年MM月"></uni-dateformat>
						</view>

                        <!-- 图片信息栏 -->
                        <view class="footer">
                                <view class="box">
                                        <uni-icons type="info" size="28"></uni-icons>
                                        <text class="text">信息</text>
                                </view>
                                <view class="box">
                                        <uni-icons type="star" size="28"></uni-icons>
                                        <text class="text">喜欢</text>
                                </view>
                                <view class="box">
                                        <uni-icons type="download" size="28"></uni-icons>
                                        <text class="text">下载</text>
                                </view>
                        </view>
                </view>
        </view>
</template>

<style lang="scss">
        .previewLayout {
                width: 100%;
                height: 100vh;
                position: relative;

                swiper {
                        width: 100%;
                        height: 100%;

                        image {
                                width: 100%;
                                height: 100%;
                        }
						
						.count{
							//10vh==视口高度的10%
							top: 10vh;
							background-color: rgba(0, 0, 0, 0.3);
							padding: 8rpx 28rpx;
							border-radius: 40rpx;
							backdrop-filter: blur(10px);
							font-size: 28rpx;
						}
                }
				
				.mask{
					&>view{
						position: absolute;
						color: white;
						margin: auto;
						left: 0;
						right: 0;
						width: fit-content;
					}
					
					.back{
						width: 60rpx;
						height:60rpx;
						left: 30rpx;
						right: 30rpx;
						margin-left:0;
						background-color: rgba(0, 0, 0, 0.5);
						border-radius: 50%;
						backdrop-filter: blur(10px);
						display: flex;
						justify-content: center;
						align-items: center;
					}
					
					.count{
						//10vh==视口高度的10%
						top: 10vh;
						background-color: rgba(0, 0, 0, 0.3);
						padding: 8rpx 28rpx;
						border-radius: 40rpx;
						backdrop-filter: blur(10px);
						font-size: 28rpx;
					}   
					
					.time{
						font-size: 150rpx;
						top: calc(18vh + 80rpx);
						font-weight: 500;
						line-height: 1em;
						text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
					}
					
					.date{
						font-size: 60rpx;
						top: calc(15vh + 50rpx);
						font-weight: 450;
						line-height: 1em;
						text-shadow:0 4rpx rgba(0, 0, 0, 0.3) ;
					}
					
					.footer{
						bottom: 10vh;
						background-color: rgba(255,255,255,0.3);
						width: 70vw;
						height: 100rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						backdrop-filter: blur(12px);
						border-radius: 20rpx;
						color: black;
						box-shadow: 0 0 15rpx 3rpx rgba(0,0,0,0.3);
					}
					
					.box{
						display: flex;
					    flex-direction: column;
						justify-content: center;
						padding: 2rpx 12rpx;
						
						.text{
							font-size: 26rpx;
						}
					}
					
				}
        }
</style>

<script setup>

</script>