import {createStore} from 'vuex'

// 01'20'10
const store = createStore({
    state() {
        return {
            account: {
                id: 0
            }
        }
    },  //state()
    mutations: { // 밑의 함수로, 위 state의 값을 변경하는 것.
        setAccount(state, payload) {
            state.account.id = payload;
        },
        // logOut(state, payload){
        //     state.account.id = 0;
        // }
    }
}) // createStore
export default store;