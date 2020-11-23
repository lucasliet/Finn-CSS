window.addEventListener('load', () => {
  
  document.querySelectorAll('.eye')
    .forEach( eye => eye.addEventListener('mouseover', () => blinkHandler.blink(eye)));

  /**
   * Make finn blink!, just call @function blink
   * @author Lucas Souza <lucasouliveira@gmail.com>
   */
  const blinkHandler = {
    /**
     * It closes finn's eye and open it again after 600ms
     * @param {Element} eye the HtmlElement that represents finn's eye
     */
    blink(eye){
      if (eye.classList.contains('closed-eye')) return;
      
      this.openOrCloseEye(eye);
  
      let isEyeOpen = false;
      let openEyes = setInterval(() => {
  
        if (isEyeOpen) {
          clearInterval(openEyes);
        } else {
          this.openOrCloseEye(eye);
          isEyeOpen = true;
        }
  
      }, 600)
  
    },
    /**
     * Invert eye's state (Open or Close)
     * @param {Element} eye the HtmlElement that represents finn's eye
     */
    openOrCloseEye: eye => {
      eye.classList.toggle('eye');
      eye.classList.toggle('closed-eye');
    }
  }

});