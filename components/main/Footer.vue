<template>
  <div>
    <!-- Footer -->
    <footer class="footer clearfix">
      <div class="container">
        <!-- first footer -->
        <div class="first-footer">
          <div class="row">
            <div class="col-md-12">
              <div class="links dark footer-contact-links">
                <div class="footer-contact-links-wrapper">
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer"> <i class="flaticon-phone-call"></i> </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>{{ $t('footer_call_us') }}</h6>
                      <p>{{ $t('phone_number') }}</p>
                    </div>
                  </div>
                  <div class="footer-contact-links-divider"></div>
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer"> <i class="omfi-envelope"></i> </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>{{ $t('footer_write_to_us') }}</h6>
                      <p>info@site.com</p>
                    </div>
                  </div>
                  <div class="footer-contact-links-divider"></div>
                  <div class="footer-contact-link-wrapper">
                    <div class="image-wrapper footer-contact-link-icon">
                      <div class="icon-footer"> <i class="omfi-location"></i> </div>
                    </div>
                    <div class="footer-contact-link-content">
                      <h6>{{ $t('footer_address_title') }}</h6>
                      <p>{{ $t('footer_address') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- second footer -->
        <div class="second-footer">
          <div class="row">
            <!-- about & social icons -->
            <div class="col-md-4 widget-area">
              <div class="widget clearfix">
                <div class="footer-logo"> <a class="logo" href="">
                    <h2>{{ $t('splitName1') }}<span>{{ $t('splitName2') }}</span></h2>
                  </a></div>
                <div class="widget-text">
                  <p>{{ $t('footer_about_text') }}</p>
                  <div class="social-icons">
                    <ul class="list-inline">
                      <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                      <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- quick links -->
            <div class="col-md-3 offset-md-1 widget-area">
              <div class="widget clearfix usful-links">
                <h3 class="widget-title">{{ $t('footer_quick_links_title') }}</h3>
                <ul>
                  <li><a href="about.html">{{ $t('footer_quick_link_about') }}</a></li>
                  <li><a href="cars.html">{{ $t('footer_quick_link_cars') }}</a></li>
                  <li><a href="car-types.html">{{ $t('footer_quick_link_car_types') }}</a></li>
                  <li><a href="team.html">{{ $t('footer_quick_link_team') }}</a></li>
                  <li><a href="contact.html">{{ $t('footer_quick_link_contact') }}</a></li>
                </ul>
              </div>
            </div>
            <!-- subscribe -->
            <div class="col-md-4 widget-area">
              <div class="widget clearfix">
                <h3 class="widget-title">{{ $t('footer_subscribe_title') }}</h3>
                <p>{{ $t('footer_subscribe_text') }}</p>
                <div class="widget-newsletter">
                  <form action="#">
                    <input type="email" :placeholder="$t('footer_subscribe_placeholder')" required>
                    <button type="submit"><i class="ti-arrow-top-right"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- bottom footer -->
        <div class="bottom-footer-text">
          <div class="row copyright">
            <div class="col-md-12">
              <p class="mb-0">&copy;2024 <a href="#">MyThemes</a>. {{ $t('footer_copyright') }}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
