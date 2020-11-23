window.addEventListener('load', function() {
  
  document.querySelectorAll('.eye')
    .forEach( eye => 
      eye.addEventListener('mouseover', function(){
        this.classList.toggle('eye')
        this.classList.toggle('closed-eye')
      })
    )

});