import vue from "vue"
import vuex from "vuex"
import axios from "axios"
import router from "../router"

var production = !window.location.host.includes('localhost')
var baseUrl = production ? '' : '//localhost:5000/'

var auth = axios.create({
    baseURL: baseUrl + "account/",
    timeout: 5000,
    // withCredentials: true
})

vue.use(vuex)

export default new vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        authenticate({ commit, dispatch }) {
            auth.get('authenticate')
                .then(res => {
                    commit('setUser', res.data)
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.log('Please Login to Continue')
                    router.push({ name: 'Login' })
                })
        },
        createUser({ commit, dispatch }, payload) {
            auth.post('register', payload)
                .then(res => {
                    console.log("Push it!")
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.log("Invalid username or password")
                    router.push({ name: 'Login' })
                })
        },
        login({ commit, dispatch }, payload) {
            auth.post('login', payload)
                .then(res => {
                    commit('setUser', res.data)
                    router.push({ name: 'Home' })
                })
                .catch(err => {
                    console.log('Invalid Username or Password')
                    router.push({ name: 'Login' })
                })
        }
    }
})