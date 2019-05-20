// index.js
function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = sum(10, 20);

  return element;
}

document.body.appendChild(component());