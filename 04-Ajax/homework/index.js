const loading = $("img")
loading.hide();

const getFriends = ()=>{
    loading.show();
    const lista = $("#lista");
    lista.empty();
    $.get('http://localhost:5000/amigos', function(data){
        for(const amigo of data){
            const li = document.createElement("li")
            li.innerText = amigo.name;
            lista.append(li);
        }
        loading.hide();
    }); 
   };
$('#boton').click(getFriends);

  $("#search").click(() => {
      $.get(`http://localhost:5000/amigos/${$("#input").val()}`, function(data){
      $("#amigo").text(data.name);
      $("#input").val("");
      $("#input").focus();
  });
});

$("#delete").click(function(){
    $.ajax({
        method: "DELETE",
        url: `http://localhost:5000/amigos/${$("#inputDelete").val()}`,
        success: ()=> {
            $("#success").text("Tu amigo fue borrado con exito");
            $("#inputDelete").val("");
            $("#inputDelete").focus();
            getFriends();
        }
    })
})