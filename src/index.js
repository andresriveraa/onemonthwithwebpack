function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML ='<p>hello webpack desde 0</p>'
  return element;
}

document.body.appendChild(component());