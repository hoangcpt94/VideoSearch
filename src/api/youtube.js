import axios from 'axios';
// https://console.cloud.google.com/apis/credentials/wizard?authuser=2&project=video-browser-2-303207&supportedpurview=project
//const KEY = 'AIzaSyBoSKe-DO-6qvPloNC9vxEl679Ejz_x1Ho'
const KEY = 'AIzaSyBADDVkMO_eTAPRaGz9u5XAtwfDBfMdSwM'
export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
})
