$(document).ready(function(){
  //$( 'html' ).height($(document).height());
  //console.log('Height: ' + $( 'html' ).height());
});

$( '.menu li' ).mouseover(function(event){
  console.log('mouse enter!');
  var submenus = $( '.menu li .sub-menu' );
  for(var i = 0; i < submenus.length; i++){
    submenus[i].style.display = 'inherit';
    if(submenus[i].parentNode != event.target){
      submenus[i].style.visibility = 'hidden';
    }
    else{
      submenus[i].style.visibility = 'visible';
    }
  }
});

$( '.menu li' ).mouseleave(function(event){
  console.log('mouse out!');
  var submenus = $( '.menu li .sub-menu' );
  for(var i = 0; i < submenus.length; i++){
    submenus[i].style.display = 'none';
    submenus[i].style.visibility = 'visible';
  }
});

