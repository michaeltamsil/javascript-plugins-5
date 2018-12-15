$(function(){
  $('#navbar-example .nav-link').click(function(e){
      e.preventDefault();
      document.querySelector($(e.currentTarget).attr('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
  })
})