<!-- display内容详解 https://developer.mozilla.org/zh-CN/docs/Web/CSS/display -->
<!-- uni-icon文档 https://uniapp.dcloud.net.cn/component/uniui/uni-icons.html -->
<template>
	<view class="userLayout">
		<view class="userInfo">
			<view class="avatar">
				<image src="/static/avatar.jpg" mode="aspectFill"></image>
			</view>
			<button type="primary" class="loginBtn">登录</button>
			<view class="username">你的名字</view>
		</view>
		
		<view class="section">
			<view class="list">
				<navigator url="">
					<view class="row">
						<view class="left">
							<uni-icons type="download-filled"></uni-icons>
							<view class="text">我的下载</view>
						</view>
						<view class="right">
							<view class="text">10</view>
							<uni-icons type="right"></uni-icons>
						</view>
					</view>
				</navigator>
				
				<navigator url="">
					<view class="row">
						<view class="left">
							<uni-icons type="chatbubble-filled"></uni-icons>
							<view class="text">我的评分</view>
						</view>
						<view class="right">
							<view class="text">5</view>
							<uni-icons type="right"></uni-icons>
						</view>
					</view>
				</navigator>
				
				<navigator url="">
					<view class="row">
						<view class="left">
							<uni-icons type="star-filled"></uni-icons>
							<view class="text">我的收藏</view>
						</view>
						<view class="right">
							<view class="text">8</view>
							<uni-icons type="right"></uni-icons>
						</view>
					</view>
				</navigator>
			</view>
		</view>
		
		<view class="section">
			
			
			<view class="list">
				<navigator url="">
					<view class="row">
						<view class="left">
							<uni-icons type="notification-filled"></uni-icons>
							<view class="text">订阅更新</view>
						</view>
						<view class="right">
							<uni-icons type="right"></uni-icons>
						</view>
					</view>
				</navigator>
				
				<navigator url="">
					<view class="row">
						<view class="left">
							<uni-icons type="flag-filled"></uni-icons>
							<view class="text">常见问题</view>
						</view>
						<view class="right">
							<uni-icons type="right"></uni-icons>
						</view>
					</view>
				</navigator>
			</view>
		</view>
	</view>
</template>

<script setup>
	
</script>

<style scoped lang="scss">
	.userLayout{
		.userInfo{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 50rpx 0;
		
		  .avatar{
			width: 200rpx;
			height: 200rpx;
			border-radius: 50%;
			overflow: hidden;
			
			image{
				width: 100%;
				height: 100%;
			    }	
		   }
		
		    .loginBtn{
			margin-top: 10rpx;  //登录按钮上方间隔
			width: 140rpx;
			height: 60rpx;
			line-height: 60rpx;
			border-radius: 30rpx;
			font-size: 30rpx;
			font-weight: 600;
		             }
		    
			.username{
				margin-top: 10rpx;
				font-size: 35rpx;
			}
		}
		
		.section{
			margin: 50rpx auto;
			width: 690rpx;
			border: 1px solid #eeeeee;
			border-radius: 15rpx;
			box-shadow: 0 0 30rpx 5rpx rgba(0,0,0,0.2); //元素框架上设置阴影(x轴偏移，y轴偏移，模糊半径，扩散半径，颜色)
			overflow: hidden;
			
			.list{
				navigator{
					border-bottom: 1px solid #eeeeee;
					
					//last-child用于选择父元素中最后一个子元素
					&:last-child{
						border-bottom: 0;
					}
				}
				
				//justify-content 文档 https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content
				//align-items 文档 https://developer.mozilla.org/zh-CN/docs/Web/CSS/align-items
				.row{
					display: flex;
					justify-content:space-between;
					align-items: center;
					padding: 0 30rpx;
					height: 100rpx;
					background: whitesmoke;
					
					.left{
						display: flex;
						align-items: center;
						
						.text{
							margin-left: 20rpx;
						}
					}
					
					.right{
						display: flex;
						align-items: center;
						
						.text{
							font-size: 28rpx;
							color: #666666;
							margin-right: 10rpx;
						}
					}
				}
			}
		}
	}
		   
</style>
