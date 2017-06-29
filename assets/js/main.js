// $(function() {
//   var listnum = 1;
//   var $input = $("#listItem"),
//       $list = $("#todo");
  
//     function addListItem(e) {
//       if(e.type==="keydown" && e.which !== 13) return;
//       e.preventDefault(); // Don't submit
//       $list.append("<li><input type='checkbox' id='checkbox" + $input.val() +"' value='none' name='check'><label class='checkbox' for='checkbox" + $input.val()  + "'>" + $input.val() + "</label><a class='waves-effect waves-light btn' id='eliminar'>remove</a></li>"); 
//       $input.val(""); // Reset input
//     }
//     $("#listItem").keydown(addListItem);

//     function completeTodoItem() {  
//   $(this).parent().toggleClass("strike");
// }

//   });

$(document).ready(function() {
  function addTodoItem(e) {
    if(e.type==="keydown" && e.which !== 13) return;
    e.preventDefault(); // Don't submit
    var nuevoItem = $("#new-item").val();
    $("#todo-list").append("<li><input type='checkbox'" + " name='todo-item'" + " class='todo-item'"+ " id='nt'" + " value='" + nuevoItem + "' /><label class='checkbox' for='nt' >"  + nuevoItem + "</label><a class='waves-effect waves-light btn item-delete' id='eliminar'>remove</a>"+"</li>");
   $("#new-item").val("");
  }
  $("#new-item").keydown(addTodoItem);

  function eliminarItem(e, item) {
    e.preventDefault();
    $(item).parent().fadeOut('slow', function() { 
      $(item).parent().remove();
    });
  }
                     
  function tacharItem() {  
    $(this).parent().toggleClass("strike");
  }

  $(function() {
    $("#todo-list").on('click', '.item-delete', function(e){
      var item = this; 
      eliminarItem(e, item)
    })
    $(document).on('click', ".todo-item", tacharItem)

  });
});