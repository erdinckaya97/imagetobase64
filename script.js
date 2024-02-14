function encodeImageFileAsURL() {
  var filesSelected = document.getElementById('upload').files;
  if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function(fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64

      var imgContainer = document.getElementById('result');
      var base64Container = document.getElementById('base64');
      // Create an <img> element and set its src attribute to the base64 data
      imgContainer.innerHTML = '<img src="' + srcData + '"/>';
      base64Container.value = srcData;
    }
    fileReader.readAsDataURL(fileToLoad);
  }
}

function encodeImageURLAsBase64() {
  var url = document.getElementById('url').value;
  fetch(url)
    .then(res => res.blob())
    .then(blob => {
      var reader = new FileReader();
      reader.onload = function() {
        var imgContainer = document.getElementById('result');
        var base64Container = document.getElementById('base64');
        imgContainer.innerHTML = '<img src="' + reader.result + '"/>';
        base64Container.value = reader.result;
      }
      reader.readAsDataURL(blob);
    });
}
