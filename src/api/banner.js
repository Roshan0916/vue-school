import axios from 'axios'
export function getBannerList () {
  return axios.get('/api/member/banner-list')
    .then((res) => {
      return Promise.resolve(res.data)
    })
}
