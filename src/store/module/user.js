import actions from './actions'
import mutations from './mutations'
import getters from './getters'
let state = {
    username:'admin'
}
const user = {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
export default user