import { createStore } from 'vuex'

const getClasses = () => {
  return fetch('http://127.0.0.1:8000/api/room_classes', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
}

const getReviews = () => {
  return fetch('http://127.0.0.1:8000/api/reviews', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
const getRooms = () => {
  return fetch('http://127.0.0.1:8000/api/rooms', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
}


export default createStore({
  state: {
    token: localStorage.getItem('token') || '',
    classes: [],
    reviews: [],
    class:[],
    rooms:[],
    host: 'http://127.0.0.1:8000/api'
  },
  getters: {
    getToken(state) {
      return state.token
    },    
    getClass(state) {
      return state.class
    },
    isAuthenticated: (state) => !!state.token,
    getHost(state) {
      return state.host
    },
    getClasses(state) {
      return state.classes
    },
    getReviews(state) {
      return state.reviews
    },
    getRooms(state) {
      return state.rooms
    }

  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    DELETE_TOKEN(state) {
      state.token = null
    },
    SET_CLASSES(state, payload) {
      state.classes = payload
    },
    SET_REVIEWS(state, payload) {
      state.reviews = payload
    },
    SET_CLASS(state, payload) {
      state.class = payload
    },
    SET_ROOMS(state, payload) {
      state.rooms = payload
    },
  },
  actions: {
    setToken({ commit }, payload) {
      commit('SET_TOKEN', payload)
    },
    deleteToken({ commit }) {
      commit('DELETE_TOKEN')
    },    
    setClass({ commit }, payload) {
      commit('SET_CLASS', payload)
    },
    getClass({ commit }, payload) {
      commit('GET_CLASS', payload)
    },
    async getClasses({ commit }) {
      try {
        const classes = await getClasses()
        console.log(classes.json().then(function (value) { commit('SET_CLASSES', value) }))

      }
      catch (error) {
      }
    },
    async getReviews({ commit }) {
      try {
        const reviews = await getReviews()
        console.log(reviews)
        console.log(reviews.json().then(function (value) { commit('SET_REVIEWS', value) }))

      }
      catch (error) {
      }
  },
  async getRooms({ commit }) {
    try {
      const rooms = await getRooms()
      console.log(rooms)
      console.log(rooms.json().then(function (value) { commit('SET_ROOMS', value) }))

    }
    catch (error) {
    }
}
}})
