import * as Scrivito from 'scrivito'


const ScrivitoExternalImageBrowserWidget = Scrivito.provideWidgetClass('ScrivitoExternalImageBrowserWidget', {
  attributes: {
    image: 'string',
    filter: ['enum', {
      values:
        [
          'brightness',
          'contrast',
          'grayscale',
          'invert',
          'opacity',
          'saturate',
          'sepia'
        ]
    }],
    percent: ['enum', { values: ['10', '20', '30', '40', '50', '60', '70', '80', '90', '100'] }],
    title: 'string',
    country: 'string',
    provider: 'string',
    source: 'string',
    name: 'string',
    notes: 'string',
    keyword: 'string',
    description: 'string',

  }
})

export default ScrivitoExternalImageBrowserWidget
