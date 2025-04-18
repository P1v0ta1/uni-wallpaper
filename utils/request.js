import { rejects } from "assert";
import { resolve } from "dns";

const BASE_URL = 'https://teach.dracowyn.com/api';

export function request(config={}){
	let{
		url,
		data={},
		method= "GET",
		header={}
	} =config;
	
	url = BASE_URL + url;
	header['Server'] = "true";
	
	return new Promise((resolve,reject)) => {
		uni.request({
			url,
			data,
			method,
			header,
			
			//request success
			success:(res) => {
				if(res.data.code === 1){
					resolve(res.data);
				}else{
					uni.showModal({
						title:"ERROR",
						content:res.data.msg,
						showCancel:false
					})
				}
			},
			fail(error) {
				rejects(error)
			}
		})
	}
}