import ServicesBox from './components/main/ServicesBox.vue';

export default defineI18nConfig(async () => {
  const enNavbar = await import('./public/lang/main/navbar/en.json');
  const frNavbar = await import('./public/lang/main/navbar/fr.json');
  const uzNavbar = await import('./public/lang/main/navbar/fr.json');
  const ruNavbar = await import('./public/lang/main/navbar/fr.json');

  const enSlide = await import('./public/lang/main/slide/en.json');

  const enAbout = await import('./public/lang/main/about/en.json');

  const enBlog = await import('./public/lang/main/blog/en.json');

  const enTestimonial = await import('./public/lang/main/testimonial/en.json');

  const enService = await import('./public/lang/main/service/en.json');

  const enServiceBox = await import('./public/lang/main/serviceBox/en.json');

  const enProcess = await import('./public/lang/main/process/en.json');

  const enVideo = await import('./public/lang/main/video/en.json');

  const enFooter = await import('./public/lang/main/footer/en.json');

  const enCommon = await import('./public/lang/common/en.json');

  return {
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
      en: {
        ...enNavbar,
        ...enSlide,
        ...enAbout,
        ...enBlog,
        ...enServiceBox,
        ...enTestimonial,
        ...enService,
        ...enProcess,
        ...enVideo,
        ...enFooter,
        ...enCommon,
      },
      fr: {
        ...frNavbar,
      },
      uz: {
        ...uzNavbar,
      },
      ru: {
        ...ruNavbar,
      }
    },
  };
});
