<template>
<div class="res">
  <b-card-group deck>
  <div class="results" v-for="(obj) in results" v-bind:key="obj.id">
    <b-card 
    :title="obj.cityTo" class="w-33">
    <b-card-text class="price">
         {{ obj.price }}
    </b-card-text>
     <b-button v-b-toggle="'collapse-' + obj.id" variant="primary">
       <b-icon icon="arrow-down"></b-icon>
     </b-button>
      <b-collapse :id="'collapse-' + obj.id"> 
        <b-card-text  class="mt-10">
          {{ secondsConverter(obj.duration.total) }}  
        </b-card-text>
        <b-card-text>
          operated by : 
           <span v-for="companies in obj.airlines" v-bind:key="companies.id">
              {{ airlineName(companies) }}
              </span>   
        </b-card-text>

        <a :href="obj.deep_link" target="_blank">  
          <b-button variant="outline-primary">Book</b-button>
        </a>
      </b-collapse>
    </b-card>
  </div>
  </b-card-group>
</div>
</template>



<script>
import json from '../../assets/airlines.json'
import moment from 'moment'
export default {
  name: 'SearchSection',
  props: {
    results: Array
  },
  methods:{
    getValues(submitEvent){
      console.log(submitEvent.target.elements.date_end.value)
    },
    airlineName(code) {
      for (let index = 0; index < this.airlines.length; index++) {
        if (this.airlines[index].code === code) {
          return this.airlines[index].name
        }
      }
    },
    secondsConverter(time) {
      let seconds = moment.duration(time, 'seconds')
      return seconds.toIsoString()
    }
  },
  data: () => ({
    airlines : json
 })
  
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
    @media screen and (min-width: 991px){
      .results{
          width: 33%;
          padding: 5px 10px;
      }
    }
</style>