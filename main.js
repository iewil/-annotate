document.getElementById("input-textarea").addEventListener("click", function(){
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
    }else{
      countLabel.innerHTML = "Selected text from ("+ startPosition +" to "+ endPosition + " of " + inputLength + ")";
    }
  }
},false);