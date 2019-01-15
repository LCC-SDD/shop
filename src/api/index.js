import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000'
//响应拦截器
axios.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
  //获取轮播图
export let getBanner = ()=>{
    return axios.get('/slider')
}
//获取good.json
export let getNew = ()=>{
    return axios.get('/new')
}
//获取列表所有数据
export let getSelect = ()=>{
    return axios.get('/list')
}
//获取详情一条数据
export let getOne = (id)=>{
    return axios.get(`/list?id=${id}`)  
}
//获取分页接口
export let getPage = (page)=>{
    return axios.get(`/page?page=${page}`)
}
//首页所有数据获取完成
export let getAll = ()=>{
    return axios.all([getBanner(),getNew()])
}
//删除商品
export let deleteGood = (id)=>{
    return axios.delete(`/list?id=${id}`)
}
//修改商品
export let getUpdate = (id,data)=>{
    return axios.put(`/list?id=${id}`,data)
}
//添加商品
export let addNew = (list)=>{
    return axios.post('/list',list)
}
