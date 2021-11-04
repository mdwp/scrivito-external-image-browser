# Scrivito External Image Browser
[![CMS: Scrivito](https://img.shields.io/badge/CMS-Scrivito-brightgreen.svg)](https://scrivito.com) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A React component/Scrivito widget for the Scrivito CMS that let you browse and embed images from Europeana, Smithsonia or Unsplash.

## Screenshot

![Screenshot](https://raw.githubusercontent.com/mdwp/scrivito-piechart/master/external-image-browser.png)

## Installation

Open your terminal.

`$ cd` to your Scrivito project

```shell
$ npm install scrivito-external-image-browser
```

Import the widget in your javascript (e.g. in `index.js` or `Widgets/index.js`).

Add this line to your index.js:

```js
import "scrivito-external-image-browser";
```

## Widget properties

In the widget properties you can set:

- Keyword which will be used to search through the image libraries
- Filter to manipulate the image (e.g. Sepia, Invert)
- Percent for the filter (e.g. Brightness 50%)