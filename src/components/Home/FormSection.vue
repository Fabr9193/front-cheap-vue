<template>
    <b-container class="h-100">
        <b-row class="h-100">
            <b-col lg="7">
                <p>test</p>
            </b-col>
            <b-col lg="5">
                <div class="hello h-100">
                    <div class="layout h-100 align-items-center">
                        <b-card class="h-75">
                            <div class="form">
                                <form @submit.prevent="getValues">
                                    <div class="departure">
                                        <div>Departure</div>
                                        <input v-model="form.fly_from" name="fly_from" type="text" placeholder="Departure">
                                    </div>                      
                                    <div class="dates">
                                        <div class="date-start">
                                            <div>Departure Date</div>
                                            <input v-model="form.date_start" name="dateFrom" type="date" placeholder="Departure date">
                                        </div>
                                        <div class="date-end">
                                            <div>Return Date</div>
                                            <input v-model="form.date_end" name="dateTo" type="date" placeholder="Return date">
                                        </div>
                                    </div>
                                    <div class="price">
                                        <div>Price</div>
                                        <input v-model="form.price_to" name="price" type="text" placeholder="Price">
                                    </div>
                                    <div class="submit">
                                        <input type="submit" value="Find it !">
                                    </div>
                                </form>
                            </div>
                        </b-card>
                    </div>
                </div>
            </b-col>
        </b-row>
          <SearchSection :results="results"> </SearchSection>
    </b-container>
</template>

<script>
import Cookie from 'js-cookie'
import SearchSection from './SearchSection'
export default {
  components : {
    SearchSection
  },
  name: 'FormSection',
  data: () => ({
    form: {
      fly_from: '',
      date_start: '',
      date_end: '',
      dateFrom:'',
      dateTo:'',
      price_to: ''
    },
    csrf : Cookie.get('csrftoken'),
    results : null
  }),
  methods:{
    getValues() {
      this.$store.dispatch('getFlightInfo', this.form)
      this.$store.dispatch('loadedData', true)
    }
  }
}
</script>

<style scoped>
.hello {
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
}
.layout{
  display:block;
}
.form {
  display: flex;
  justify-content: center;
}
.background-image{
  height: 300px;
  background-color: red;
  display: none;
 
}
.departure,.date-start, .date-end, .dates, .price, .submit {
  text-align: left;
  display: flex;
  flex-direction: column;
}
.dates {
  flex-direction: row;
}
.date-end {
  margin-left : 10px;
}
.submit {
  margin-top:25px
}
.hidden {
  display: none;
}
 @media screen and (min-width:991px) {
   .background-image{
    display:block;
    width: 40%;
   }
   .layout {
     display: flex;
   }
   .form {
     width: 100%;
   }
   
  }
</style>