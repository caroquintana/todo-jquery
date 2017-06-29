$(document).ready(function() {
  
  function addTodoItem(e) {
    if(e.type==="keydown" && e.which !== 13) return;
    e.preventDefault(); // Usar para habilitar la entrada a través de un enter
    var nuevoItem = $("#new-item").val(); //recoger valor
    $("#todo-list").append("<li class=itemsfirst><input type='checkbox'" + " name='todo-item'" + " class='todo-item'"+ " id='nt'" + " value='" + nuevoItem + "' /><label class='checkbox' for='nt' >"  + nuevoItem + "</label><a class='waves-effect waves-light btn item-delete' id='eliminar'>remove</a>"+"</li>");
   $("#new-item").val(""); //para limpiar el campo input
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

//ejecuta eliminar item y tachar item
  $(function(e, item, tacharItem) {
    $("#todo-list").on('click', '.item-delete', function(e){
      var item = this; 
      eliminarItem(e, item)
    })
    $(document).on('click', ".todo-item", tacharItem)
  });

//intentando pasar los elementos a complete
  function addComplete(e) {
    $("#eliminar").on('click', function(e){
      e.preventDefault();
      $("#completeItems").append("<p>caro</p>");
    })
  };

});