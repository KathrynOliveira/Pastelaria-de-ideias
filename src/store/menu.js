export default{
    namespaced: true,

    state:{
        menus:[],
        menu: {},
        error: '',
        type: {hasDrink: false}
    },
    getters:{
        menus(state){
            return state.menus.filter( item => item.hasDrink == state.type.hasDrink)
        },
        menu(state){
            return state.menu
        },
        error(state){
            return state.error
        },
        type(state){
            return state.type
        }
    },
    mutations:{
        ADD_MENU(state, value){
            state.menus.push(value)
        }
    },
    actions:{
        async store({commit, state}){

            if (Object.keys(state.menu).length > 0) {

                state.menu.hasDrink = state.type.hasDrink

                await commit('ADD_MENU', state.menu)
                state.menu = {};
            }else{
                state.error = 'Campo obrigatório'
                return;
            }
        },
        async clear({state}){
            state.menu = {};
         },
    }
}