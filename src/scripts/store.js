import {createStore} from 'vuex'

// 01'20'10
const store = createStore({
    state() {
        return {
            account: {
                id: 0
            }
        }
    },
    mutations: {
        setAccount(state, payload) {
            state.account.id = payload;
        },
        // logOut(state, payload){
        //     state.account.id = 0;
        // }
    }
})
export default store;