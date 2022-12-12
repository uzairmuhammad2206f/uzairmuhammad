/** @format */

$(document).ready(function () {
  $("#btn_enter").click(function () {
    var txt_input = $("#txt_input").val();
    var alphabetsArr = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
    var vowels = [];
    var numberOfWords = [];
    var spliting = $("#txt_input").val();
    var name = $("p").append(`${spliting }`);
     var splitWords = $(name).html().split("").join("");
     var NoW = $('#txt_input').val().split(" ")
     var charachters = [];
     var txtInp = $('#txt_input').val().split("")
charachters = txtInp

     console.log(charachters);
     
    
    var numberOfCharacters = [];
    numberOfCharacters = splitWords
    numberOfWords = NoW
    var spaceCounter = 0;

    for (var i = 0; i < txt_input.length; i++) {
      if(txt_input[i] == " "){
spaceCounter++
      }
      for (var j = 0; j < alphabetsArr.length; j++) {
        if (txt_input[i] == alphabetsArr[j]) {
          vowels[i] = alphabetsArr[j];
        }
      }
    }
    $(`#table_body`).prepend(`
    <tr>
    <td id="firstTH" class="text-center">${txt_input}</td>
    <td class="px-5">${vowels.join("").length}</td>
    <td class="px-5">${numberOfWords.length}</td>
    <td class="px-5">${charachters.length -= spaceCounter}</td>
    <td class="px-5">${spaceCounter}</td>
    </tr>`);

    $("#txt_input").val(null);
  });
});
