<template>
    <div id="landingPage">
        <div class="overlay"></div>
        <div class="bg-Landing h-100">
            <FormSection/>
        </div>
    </div>
</template>

<script>
import FormSection from '@/components/Home/FormSection.vue'

export default {
  name: 'landingPage',
  components: {
    FormSection
  }
}
</script>

<style lang="scss">
    #landingPage {
        background-image: url("~@/assets/sky.jpg");
        height: 80vh;
        .bg-landing {
            height: 100%;
        }
    }
</style>