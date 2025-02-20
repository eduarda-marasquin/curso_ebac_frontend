$(document).ready(function () {
    $("#adiciona-tarefa").click(function(){
        $("#submete-tarefa").slideToggle();
    })
    $("#botao-form").click(function(e){
        e.preventDefault();
        var item = $("#texto-tarefa").val();
        $(`<li class="tarefa">${item}</li>`).appendTo("#lista-de-tarefas");
        $("texto-tarefa").attr(item, '');
    })
    $("#lista-de-tarefas").on("click", "li", function(){
        $(this).toggleClass("completa");
    });
});
