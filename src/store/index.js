import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups:[
      {
          imageUrl:'https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          id:'aefkjhigashdjoi',
          title:'Meetup in NewYork',
          date:new Date(),
          location: 'New York',
          description: 'This is an awesome Meetup'
      },
      {
          imageUrl:'https://static.toiimg.com/photo/48201473/.jpg',
          id:'sdxrctfvgybhuijn',
          title:'Bakers Meetup', 
          date:new Date(),
          location: 'Switzerland',
          description: 'Come dear bakers...Share Your tips'
      }
    ],
    user: {
      id: 'lyktdfghuiopkjh',
      registeredMeetups: [
        'aefkjhigashdjoi'
      ]
    }
  },
  mutations: {
    createMeetup (state,payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup ({commit},payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id:'zesrxdyctfuvgbhinj'
      }
      //Reachout and store to firbase
      commit('createMeetup',meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA,meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state,getters) {
      return getters.loadedMeetups.slice(0,5);
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
