# react bootstrap popup boxes

Get the AMD module located at `react-bootstrap-popup-boxes.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactBootstrapPopupBoxes': 'react-bootstrap-popup-boxes'
  }
});

require(['react', 'ReactBootstrapPopupBoxes'], function(React, ReactBootstrapPopupBoxes) {

  React.render(React.createElement(ReactBootstrapPopupBoxes), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
