<template>
  <div class="hello">
    <div class="layout">
      <div class="form">
        <form @submit.prevent="getValues">
        <div class="departure">
          <div>Departure</div>
          <input name="departure" type="text" placeholder="Departure">
        </div>
        <div class="dates">
          <div class="date-start">
            <div>Departure Date</div>
            <input name="date_start" type="date" placeholder="Departure date">
          </div>
          <div class="date-end">
            <div>Return Date</div>
            <input name="date_end" type="date" placeholder="Return date">
          </div>
        </div>
        <div class="price">
          <div>Price</div>
          <input name="price" type="text" placeholder="Price">
        </div>
        <div class="submit">
          <input type="submit" value="Find it !">
        </div>
        </form>
      </div>  
      <div class="background-image">
        <p style="color:white; font-weight:800">BIENVENUE CHEZ AIR FRONSE <br><br><br>ICI LA VIE C EST TROP BIEN</p>
      </div>
    </div>
  </div>
</template>

<script>
 import Cookie from 'js-cookie'
export default {
  name: 'FormSection',
  methods:{
    getValues(submitEvent){
      console.log(submitEvent.target.elements.date_end.value)
    },
    submitValues(){

    }
  },
 data: function () {
    return {
      csrf : Cookie.get('csrftoken')
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
  background-color:greenyellow;
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
     width: 60%;
   }
   
  }
</style>