<template>
    <div id="home">
        <LandingPage />
        <SearchSection :results=jsonlist />
    </div>
</template>

<script>
import SearchSection from '@/components/Home/SearchSection.vue'
import LandingPage from '@/components/Home/LandingPage.vue'

export default {
  name: 'home',
  components : {
    SearchSection,
    LandingPage
  }
}
</script>