<template>
<div v-if="flightInfo && loaded == true" class="res">
    <b-table striped hover :items="flightInfo"></b-table>
</div>
</template>



<script>
import { mapState } from 'vuex'

export default {
  name: 'SearchSection',
  methods:{
    getValues(submitEvent){
      console.log(submitEvent.target.elements.date_end.value)
    }
  },
  computed: {
    ...mapState({
      flightInfo: state => state.flight.flightResult,
      loaded: state => state.flight.loaded
    })
  }
}
</script>

<style scoped>
    .results{
        display: flex;
        justify-content: center;
    }
    .res{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .price,.city-from {
        margin-right: 5px
    }
</style>