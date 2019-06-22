var fileList = []

$(document).ready(function() {  
  $('#input-textarea').val("Add a file on the right")

  $('#input-textarea').click(function() {
    var countLabel = document.getElementById('cursor-count');
    var textarea = document.getElementById('input-textarea');
    var startPosition = textarea.selectionStart;
    var endPosition = textarea.selectionEnd;
    var inputLength = textarea.value.length;

    // Check if text is provided
    if (inputLength != 0) {
      // Check if you've selected text
      if(startPosition == endPosition){
        countLabel.innerHTML = "The position of the cursor is (" + startPosition + "/" + inputLength + ")";
      } else{
        countLabel.innerHTML = "Selected text from ("+ startPosition +" to "+ endPosition + " of " + inputLength + ")";
      }
    }
  })

    // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {


    $("#get-files").on('input', handleFileSelect);

    function clearList(){
      fileList = []
      $("#fileList").empty()
    }

    function addToList(fileName, content){
      $("#fileList").append("<li>" + fileName +"</li>")
      fileList.push(content)
    }

    function handleFileSelect(evt) {
      clearList()
      var files = evt.target.files;
      var output = [];
      for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('text.*')) {
          continue;
        }
        var reader = new FileReader();

        reader.onload = function(event){
          var contents = event.target.result;
          console.log(i)
          // addToList(files[i].name, contents)
        };

        reader.readAsText(f);
      }

    }
  } else {
    alert('The File APIs are not fully supported in this browser.');
  }

  
});

