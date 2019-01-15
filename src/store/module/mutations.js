import * as Types from './mutations-type';
const mutations = {
    [Types.ADD_UPDATE](state,param){
        state.username = `${param}`
    }
}
export default mutations