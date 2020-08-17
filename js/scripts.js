$(document).ready(function() {
  $("#form").submit(function(event){
    
    const item1Inputted = $("input#item1").val();
    const item2Inputted = $("input#item2").val();
    const item3Inputted = $("input#item3").val();
    const item4Inputted = $("input#item4").val();
    
    const listInputted = [item1Inputted, item2Inputted, item3Inputted, item4Inputted];
    const alphabetical = listInputted.sort();
    const capitalNames = alphabetical.map(alphabetical => alphabetical.toUpperCase());
   
    // console.log(capital);
    capitalNames.forEach(function(capital) {
      $("#list").append("<li>" + capital + "</li>");
      
    });
    $("#form").hide();
    event.preventDefault();  
  });
});