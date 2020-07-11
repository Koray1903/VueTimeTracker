import Vue from "vue";
import Vuex from "vuex"
import createPersistedState from "vuex-persistedstate";
import {v4 as uuidv4} from "uuid";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        timers: []
    },
    plugins: [createPersistedState()],
    mutations: {

        addNewTimer: (state, payload) => {
            let newTimer = {};
            let rightNow = new Date();

            newTimer.id = uuidv4();

            if (payload) {
                newTimer.name = payload;
            } else {
                newTimer.name = `${rightNow.toLocaleDateString()}`;
            }

            newTimer.isActive = true;
            newTimer.startedTime = Date.now()
            newTimer.stoppedTime = 0
            newTimer.restartTime = 0
            newTimer.waitingTime = 0

            state.timers.unshift(newTimer);
        },

        deleteTimer: (state, payload) => {
            let index = state.timers.findIndex(element => element.id === payload)
            state.timers.splice(index, 1);
        },

        pauseTimer: (state, payload) => {
            let index = state.timers.findIndex(element => element.id === payload)
            state.timers[index].stoppedTime = Date.now() - state.timers[index].waitingTime
            state.timers[index].interval = setInterval(() => {
                state.timers[index].waitingTime += 1000
            }, 1000)
            state.timers[index].isActive = false
        },
        startTimer: (state, payload) => {
            let index = state.timers.findIndex(element => element.id === payload)
            state.timers[index].restartTime = Date.now()
            clearInterval(state.timers[index].interval);
            state.timers[index].isActive = true
        },
    },
    actions: {
        addNewTimer: (context, payload) => {
            context.commit("addNewTimer", payload)
        },
        deleteTimer: (context, payload) => {
            context.commit("deleteTimer", payload)
        },
        pauseTimer: (context, payload) => {
            context.commit("pauseTimer", payload)
        },
        startTimer: (context, payload) => {
            context.commit("startTimer", payload)
        },
    },
    getters: {}
});


