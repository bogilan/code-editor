window.onload = function() {
    var codeInputHTML = document.getElementById('code-input-html');
    var codeInputCSS = document.getElementById('code-input-css');
    var codeInputJS = document.getElementById('code-input-js');
    var previewIframe = document.getElementById('preview-iframe').contentWindow.document;
  
    codeInputHTML.addEventListener('input', updatePreview);
    codeInputCSS.addEventListener('input', updatePreview);
    codeInputJS.addEventListener('input', updatePreview);
  
    function updatePreview() {
      var htmlCode = codeInputHTML.value;
      var cssCode = '<style>' + codeInputCSS.value + '</style>';
      var jsCode = '<script>' + codeInputJS.value + '</script>';
  
      previewIframe.open();
      previewIframe.write(htmlCode + cssCode + jsCode);
      previewIframe.close();
    }
  };
  
