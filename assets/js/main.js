$(function() {
  var listnum = 1;
  var $input = $("#listItem"),
      $list = $("#todo");
  
    function addListItem(e) {
      if(e.type==="keydown" && e.which !== 13) return;
      e.preventDefault(); // Don't submit
      $list.append("<li><input type='checkbox' id='checkbox" + $input.val() +"' value='none' name='check'><label class='checkbox' for='checkbox" + $input.val()  + "'>" + $input.val() + "</label><a class='waves-effect waves-light btn' id='eliminar'>remove</a></li>"); 
      $input.val(""); // Reset input
    }
    $("#listItem").keydown(addListItem);

    $('.todo').on('click', '.eliminar',function(){
     $(this).parent().remove();
   });

  });

