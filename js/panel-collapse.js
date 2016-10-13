 $(document).ready(function() {
 
 
// $('.sub-section-heading span').click(function() { alert($(this).find('a').attr('name')); });

  var panelheading = $('.expandable-panel-heading');
  var panelsection = $('.expandable-panel-content');
  var subheading = $('.sub-section-heading');
  
  panelheading.find('h2').append(' <i class="fa fa-plus-square-o" aria-hidden="true">');
  panelheading.find('h2').append(' <i class="fa fa-minus-square-o" aria-hidden="true">');
  subheading.find('h3').append(' <i class="fa fa-plus-square-o" aria-hidden="true">');
  subheading.find('h3').append(' <i class="fa fa-minus-square-o" aria-hidden="true">'); 
  

  if (! panelheading.hasClass('active')) {
    panelheading.find('h2 > .fa-minus-square-o').hide();
  }

  if (! subheading.hasClass('active')) {
    subheading.find('h3 > .fa-minus-square-o').hide();
  }

  /* Could abstract and refactor these actions */
  // main panel collapse
  panelheading.click(function() {
    $(this).parent().find(panelsection).slideToggle({
      duration: 200
    });

    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).find('h2 > .fa-plus-square-o').hide();
      $(this).find('h2 > .fa-minus-square-o').show();
    } else {
      $(this).find('h2 > .fa-plus-square-o').show();
      $(this).find('h2 > .fa-minus-square-o').hide();
    }

  });




  // sub-sections toggle 
  $('.sub-section-heading').click(function() {
    $(this).parent().find('.sub-section-content').slideToggle({
      duration: 200
    });

    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $(this).find('h3 > .fa-plus-square-o').hide();
      $(this).find('h3 > .fa-minus-square-o').show();
    } else {
      $(this).find('h3 > .fa-plus-square-o').show();
      $(this).find('h3 > .fa-minus-square-o').hide();
    }
  }); 
});