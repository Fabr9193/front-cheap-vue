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
                                        <input v-model="form.departure" name="departure" type="text" placeholder="Departure">
                                    </div>
                                    <div class="dates">
                                        <div class="date-start">
                                            <div>Departure Date</div>
                                            <input v-model="form.date_start" name="date_start" type="date" placeholder="Departure date">
                                        </div>
                                        <div class="date-end">
                                            <div>Return Date</div>
                                            <input v-model="form.date_end" name="date_end" type="date" placeholder="Return date">
                                        </div>
                                    </div>
                                    <div class="price">
                                        <div>Price</div>
                                        <input v-model="form.price" name="price" type="text" placeholder="Price">
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
    </b-container>
</template>

<script>
 import Cookie from 'js-cookie'
export default {
  name: 'FormSection',
  data: () => ({
    form: {
      departure: '',
      date_start: '',
      date_end: '',
      price: ''
    },
    csrf : Cookie.get('csrftoken')
  }),
  methods:{
    getValues(){
        return this.$store.dispatch('getFlightInfo', this.form)
    }
  },
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