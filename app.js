let textareaCounter = (function() {
  'use strict';  

  let textareas = document.querySelectorAll('textarea');
  
  for (let i = 0; i < textareas.length; ++i) {
    if(textareas[i].hasAttribute('maxlength')) {
      let chars = 0,
          counter = document.createElement('SPAN'),
          maxLength = textareas[i].getAttribute('maxlength'),
          parentElement = textareas[i].parentNode;
      
      counter.classList.add('counter');
      Object.assign(counter.style,{
        position: 'absolute',
        bottom: '10px',
        right: '10px',
        fontSize: '10px'
      });
      counter.innerHTML = `${chars}/${maxLength}`;
      
      parentElement.style.position = 'relative';
      parentElement.appendChild(counter);
      
      textareas[i].addEventListener('keyup', ev => {
        let valueLength = textareas[i].value.length;
        counter.innerHTML = `${valueLength}/${maxLength}`;
      });
    }
  }
}());

textareaCounter();
