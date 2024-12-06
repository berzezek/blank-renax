<template>
  <div>
    <!-- Services Box -->
    <div class="services-box mt--120 mb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12">
            <div class="item active"> 
              <span class="icon ti-money"></span>
              <h5>{{ $t('affordable_rates_title') }}</h5>
              <p>{{ $t('affordable_rates_description') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="item"> 
              <span class="icon omfi-transmission"></span>
              <h5>{{ $t('amazing_fleet_title') }}</h5>
              <p>{{ $t('amazing_fleet_description') }}</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="item"> 
              <span class="icon omfi-location"></span>
              <h5>{{ $t('delivered_location_title') }}</h5>
              <p>{{ $t('delivered_location_description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
