//获取uniapp的系统信息
const SYSTEM_INFO = uni.getSystemInfo();

//获取并导出顶部状态栏的高度
export const getStatusBarHeight = () => SYSTEM_INFO.getStatusBarHeight;


//获取顶部菜单按钮
export const getTitleBarHeight = () => {
	//如果是小程序当中则会有菜单栏按钮高度
	if (uni.getMenuButtonBoundingClientRect){
		//获取顶部菜单按钮布局信息
		let{
			top,
			height 
		} = uni.getMenuButtonBoundingClientRect();
		//顶部菜单按钮高度+顶部菜单按钮的top位置 - 状态栏高度 *2 
		return height + (top -getStatusBarHeight()) * 2;
	} else {
		return 44; 
	}
}