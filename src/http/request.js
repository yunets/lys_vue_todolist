import axios from 'axios'
const axiosInstance= axios.create({
   // baseURL: 'http://127.0.0.1:8080',
    timeout: 10000,
    headers: {'csdn': 'https://liuyunshengsir.blog.csdn.net/article/details/131639019'}
  });

  export default axiosInstance ;