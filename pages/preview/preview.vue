<template>
        <view class="previewLayout">
                <swiper circular>
                        <swiper-item v-for="item in 5">
                                <image src="/static/wallpaper/w7.jpg"></image>
                        </swiper-item>
                </swiper>
                
                
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
                }
        }
</style>

<script setup>
        
</script>
