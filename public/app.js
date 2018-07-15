$(document).ready(function() {
  //TAB FUNCTIONALITY
  $(".html_container").hide()
  $(".view_container").hide()
  $(".create_container").show()
  $(".module1").hide();
  $(".module2").hide();


  $('#create').on('click', function() {
    $("#preview").removeClass('active')
    $("#html").removeClass('active')
    $("#create").addClass('active')
    $(".html_container").hide()
    $(".view_container").hide()
    $(".create_container").show()

  })
  $('#html').on('click', function() {
    $(".create_container").hide()
    $(".html_container").show()
    $(".view_container").hide()
    $("#create").removeClass('active')
    $("#preview").removeClass('active')
    $("#html").addClass('active')

  })
  $('#preview').on('click', function() {
    $(".create_container").hide()
    $(".html_container").hide()
    $(".view_container").show()
    $("#create").removeClass('active')
    $("#html").removeClass('active')
    $("#preview").addClass('active')
  })

})

window.onload = function() {

  var dropdown = document.getElementById('ddlViewBy')
  dropdown.addEventListener('change', dropDownChange, false)

  function dropDownChange() {

    $('#addButton').on('click', function() {
    var i = 0
    var large = `<div class="dropdown">
          <select id="ddlViewBy${i++}" name="dropdown" onchange="dropDownChange()">
            <option class="dropdown-item" id = "blankmodule" value = "blank" >Choose Module</option>
            <option class="dropdown-item" id = "module1" value = "module1" >MODULE 1</option>
            <option class="dropdown-item" value = "module2" >MODULE 2</option>
            <option class="dropdown-item" value = "module3" >MODULE 3</option>
            </select>
        </div>`
      $(".create_container").append(large);
    })

    var selectedText = $("#ddlViewBy" +).find("option:selected").text()
    var selectedValue = `$("#ddlViewBy${i}").val()`
    switch (selectedValue) {
      //MODULE 1//
      case "module1":
        $(".module1").show();
        $(".module2").hide()

        function previewFile() {
          var preview = document.querySelector('img'); //selects the query named img
          var file = document.querySelector('input[type=file]').files[0]; //sames as here
          var reader = new FileReader();
          reader.onloadend = function() {
            preview.src = reader.result;
          }
          if (file) {
            reader.readAsDataURL(file);
          } else {
            preview.src = "";
          }
        }
        previewFile()
        $('#saveButton').on("click", function() {
          var headerText = $("input[type=text][name=headerText]").val()
          var headerSize = $("input[type=number][name=headersize]").val()
          var imgUploadSRC = $("input[type=file][name=img]").val()
          var imgSRC = $("input[type=text][name=imgLink]").val()
          var paraText = $("input[type=text][name=paragraphText]").val()
          var ctaText = $("input[type=text][name=ctaText]").val()
          var cta_href_link = $("input[type=text][name=ctaLink]").val()

          document.getElementById('viewh1').innerHTML = headerText
          document.getElementById('viewPara').innerHTML = paraText
          document.getElementById('saveButton').innerHTML = "SAVED!"
          if (document.getElementById('saveButton').innerHTML === "SAVED!") {
            $('#addButton').show()



          }

          $("#viewh1").css({
            fontSize: `${headerSize}px`
          });
          $('#viewImg').attr("src", imgSRC)
          $('#cta_href').text(ctaText)
          $('#cta_href').attr("href", cta_href_link)
        })
        break;


        //MODULE 2
      case "module2":
        $(".module1").hide()
        $(".module2").show()
        break;
      default:
        $(".module1").hide()
        $(".module2").hide()
        $('#addButton').show()
    }
  }

}
