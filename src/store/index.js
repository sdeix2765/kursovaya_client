import { createStore } from 'vuex'

const getClasses = () => {
  return fetch('http://127.0.0.1:8000/api/room_classes',{
    method: "GET",
    headers:{
      'Content-Type': 'application/json'
    },
  })
}



export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    classes:[],
    host: 'http://127.0.0.1:8000/api'
  },
  getters: {
    getToken(state){
      return state.token
    },
    isAuthenticated: (state) => !!state.token,
    getHost(state){
      return state.host
    },
    getClasses(state){
      return state.classes
    }

  },
  mutations: {
    SET_TOKEN(state,payload){
      state.token=payload
    },
    DELETE_TOKEN(state){
      state.token=null
    },
    SET_CLASSES(state,payload){
      state.classes=payload
    },
  },
  actions: {
    setToken({commit}, payload){
      commit('SET_TOKEN',payload)
    },
    deleteToken({commit}){
      commit('DELETE_TOKEN')
    },
    async getClasses({commit}){
      console.log("dq")
      try{
        const classes = await getClasses()
        console.log(classes)
        console.log(classes.json().then(function(value){commit('SET_CLASSES', value)}))

      }
      catch(error){
        console.log("qewq")
      }
    },
  },
})
