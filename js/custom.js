$(document).ready(function(){
  //$( 'html' ).height($(document).height());
  //console.log('Height: ' + $( 'html' ).height());
});

$( '.menu li' ).mouseover(function(event){
  console.log('mouse over');
  var submenus = $( '.menu li .sub-menu' );
  for(var i = 0; i < submenus.length; i++){
    submenus[i].style.display = 'inherit';
    submenus[i].style.'visibility' = 'hidden';
  }
});
