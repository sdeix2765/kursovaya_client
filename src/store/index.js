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
const getBooks = () => {
  return fetch('http://127.0.0.1:8000/api/books', {
    method: "GET",
    headers: {
      'Content-Type': 'application/json'
    },
  })
}
const getGuests = () => {
  return fetch('http://127.0.0.1:8000/api/guests', {
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
    books:[],
    guests:[],
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
    },
    getBooks(state) {
      return state.books
    },
    getGuests(state) {
      return state.guests
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
    SET_BOOKS(state, payload) {
      state.books = payload
    },
    SET_GUESTS(state, payload) {
      state.guests = payload
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
},
async getBooks({ commit }) {
  try {
    const books = await getBooks()
    console.log("books")
    console.log(books.json().then(function (value) { commit('SET_BOOKS', value) }))

  }
  catch (error) {
  }
},
async getGuests({ commit }) {
  try {
    const guests = await getGuests()
    console.log(guests.json().then(function (value) { commit('SET_GUESTS', value) }))

  }
  catch (error) {
  }
}
}})
