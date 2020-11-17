<template>
    <div id="home">
        <FormSection/>
        <SearchSection :results=jsonlist />
    </div>
</template>

<script>
import FormSection from '@/components/Home/FormSection.vue'
import SearchSection from '@/components/Home/SearchSection.vue'

export default {
  name: 'home',
  components : {
    FormSection,
    SearchSection
  }
}
</script>