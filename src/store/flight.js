/**
 * Created by Orlands on 03/12/2020.
 */
import axios from 'axios'
import moment from 'moment'

const flight = {
  state: () => ({
    flightObj: [],
    loaded: false,
    flightResult: []
  }),
  mutations: {
    storeFlightInfo(state, flightInfo) {
      console.log(flightInfo)
      for (var i = 0; i < flightInfo.data.data.length; i++) {
        state.flightObj[i] = {}
        state.flightObj[i].cityFrom = flightInfo.data.data[i].cityFrom
        state.flightObj[i].cityTo = flightInfo.data.data[i].cityTo
        state.flightObj[i].price = flightInfo.data.data[i].price
        state.flightResult = state.flightObj
      }
    },
    loadedData(state) {
      state.loaded = true
      console.log(state.loaded)
    }
  },
  actions: {
    getFlightInfo({commit}, data) {
      data.dateFrom = moment(data.date_start).format('DD/MM/YYYY')
      data.dateTo = moment(data.date_end).format('DD/MM/YYYY')
      let searchParams = new URLSearchParams(data)

      axios.get('http://localhost:8000/flights?' + searchParams.toString())
      .then( (res) => {
        commit('storeFlightInfo', res)
      })
    },
    loadedData ({commit}) {
      commit("loadedData", true);
    }
  },
  getters: {
   
  }
}

export default flight