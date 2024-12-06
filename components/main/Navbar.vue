<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo -->
        <div class="logo-wrapper">
          <a class="logo" href="">
            <h2>{{ $t('splitName1') }}<span>{{ $t('splitName2') }}</span></h2>
          </a>
        </div>
        <!-- Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
          aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span
            class="navbar-toggler-icon"><i class="fa-solid fa-bars"></i></span> </button>
        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link" href="">{{ $t('home') }}</a></li>
            <li class="nav-item"><a class="nav-link" href="">{{ $t('about') }}</a></li>
            <li class="nav-item"><a class="nav-link" href="">{{ $t('services') }}</a></li>
            <li class="nav-item"><a class="nav-link" href="">{{ $t('products') }}</a></li>
            <li class="nav-item"><a class="nav-link" href="">{{ $t('contact') }}</a></li>
            <li class="nav-item dropdown"> <a class="nav-link dropdown-toggle" href="#" role="button"
                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">{{ locale }} <i
                  class="ti-angle-down"></i></a>
              <ul class="dropdown-menu">
                <li v-for="localeItem in availableLocales" :key="localeItem.code">
                  <nuxt-link :to="switchLocalePath(localeItem.code)" class="dropdown-item">
                    <span>{{ localeItem.name }}</span>
                  </nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
          <div class="navbar-right">
            <div class="wrap">
              <div class="icon"> <i class="flaticon-phone-call"></i> </div>
              <div class="text">
                <p>{{ $t('need_help') }}</p>
                <h5><a :href="`tel:${$t('phone_number')}`">{{ $t('phone_number') }}</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})
</script>

<style scoped></style>