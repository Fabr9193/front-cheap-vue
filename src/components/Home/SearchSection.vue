<template>
<div class="res">
  <div class="results" v-for="(obj) in results" v-bind:key="obj.id">
    
    <div class="price">
         {{ obj.price }}
    </div>
    <div class="city-from">
         {{ obj.cityFrom }}
    </div>    

    <div class="citoy-to">
         {{ obj.cityTo }}
    </div>
  </div>
</div>
</template>



<script>
export default {
  name: 'SearchSection',
  props: {
    results: Array
  },
  methods:{
    getValues(submitEvent){
      console.log(submitEvent.target.elements.date_end.value)
    }
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