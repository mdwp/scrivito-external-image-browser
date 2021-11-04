import * as Scrivito from 'scrivito'

Scrivito.provideEditingConfig('ScrivitoExternalImageBrowserWidget', {
  title: 'External Image Browser',
  attributes: {
    filter: {
      title: 'Filter',
      values: [
        { value: 'brightness', title: 'Brightness' },
        { value: 'contrast', title: 'Contrast' },
        { value: 'grayscale', title: 'Grayscale' },
        { value: 'invert', title: 'Invert' },
        { value: 'opacity', title: 'Opacity' },
        { value: 'saturate', title: 'Saturate' },
        { value: 'sepia', title: 'Sepia' }]
    },
    keyword: {
      title: 'Keyword'
    },


  },

  properties: [
    'keyword',
    'filter',
    'percent'
  ],

  propertiesGroups: [
    {
      title: "Smithsonia Browser",
      component: "SmithsoniaTab",
    },
    {
      title: "Europeana Browser",
      component: "EuropeanaTab",
    },
    {
      title: "Unsplash Browser",
      component: "UnsplashTab",
    },
  ],

})
