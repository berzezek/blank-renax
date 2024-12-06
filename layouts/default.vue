<template>
  <div>
    <div v-if="isLoading">
      <main-loader />
    </div>
    <div v-cloak>
      <main-scroll />
      <main-navbar />
      <main-slide />
      <slot />
      <main-footer />
      <main-popup />
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoading = ref(true)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)
})

useHead({
  meta: [
    { charset: 'utf-8' },
    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }
  ],
  title: 'Blank',
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap' },
    { rel: 'stylesheet', href: '/assets/css/plugins.css' },
    { rel: 'stylesheet', href: '/assets/css/style.css' },
    { rel: 'shortcut icon', href: 'favicon.ico' }

  ],
  script: [
    { src: '/assets/js/jquery-3.7.1.min.js' },
    { src: '/assets/js/jquery-migrate-3.4.1.min.js' },
    { src: '/assets/js/modernizr-2.6.2.min.js' },
    { src: '/assets/js/imagesloaded.pkgd.min.js' },
    { src: '/assets/js/jquery.isotope.v3.0.2.js' },
    { src: '/assets/js/popper.min.js' },
    { src: '/assets/js/bootstrap.min.js' },
    { src: '/assets/js/scrollIt.min.js' },
    { src: '/assets/js/jquery.waypoints.min.js' },
    { src: '/assets/js/owl.carousel.min.js' },
    { src: '/assets/js/jquery.stellar.min.js' },
    { src: '/assets/js/jquery.magnific-popup.js' },
    { src: '/assets/js/select2.js' },
    { src: '/assets/js/datepicker.js' },
    { src: '/assets/js/YouTubePopUp.js' },
    { src: '/assets/js/vegas.slider.min.js' },
    { src: '/assets/js/custom.js' },
    { src: '/assets/js/vegas-slider-kenburns.js' }
  ]
})
</script>

<style scoped></style>