import Axios from 'axios'
// import LoadingBar from "iview/src/components/loading-bar"
// Axios.defaults.timeout = 5000;

/**
 *  全局错误相应拦截
 */
Axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response.status === 401) {
    location.href = '/api/user/login'
    return
  }
  // LoadingBar.error()
  return Promise.reject(error)
})
export default Axios
