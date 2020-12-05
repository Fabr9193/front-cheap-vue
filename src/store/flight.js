/**
 * Created by Orlands on 03/12/2020.
 */
import axios from 'axios'
import moment from 'moment'

const flight = {
  state: () => ({
    flightObj: [],
  }),
  mutations: {
    storeFlightInfo(state, flightInfo) {
      console.log(flightInfo)
      for (var i = 0; i < flightInfo.data.data.length; i++) {
        state.flightObj[i] = []
        state.flightObj[i]["cityFrom"] = flightInfo.data.data[i].cityFrom
        state.flightObj[i]["cityTo"] = flightInfo.data.data[i].cityTo
        state.flightObj[i]["Price"] = flightInfo.data.data[i].price
      }
      console.log(state.flightObj)
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
    }
  },
  getters: {

  }
}

export default flight