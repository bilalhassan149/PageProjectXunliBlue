import axios from 'axios'
// import globalApi from "./globalAPI" 
import state from '../store/state'

class RequestSender {
	static getRequest(url) {
		return axios.get(
			url,
			{headers:state.head || {
				'Auth-Token':state.token,
				// 'Auth-Token': "79ea4758-346c-4db8-b114-bd0ef2b1ec4c",
				"accept-language":"zh-CN,zh;q=0.9,en-US;",
			},} 
		)
	}
	static postRequest(url, datas, timeOuts) {
		return axios.post(
			state.apiUrl + url,
			datas,
			{headers:state.head || {
				'Auth-Token':state.token,
				// 'Auth-Token': "79ea4758-346c-4db8-b114-bd0ef2b1ec4c",
				"accept-language":"zh-CN,zh;q=0.9,en-US;",
			},},
			timeOuts
		)
	}
}
export default RequestSender;