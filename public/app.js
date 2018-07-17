$(document).ready(function() {
  //TAB FUNCTIONALITY
  $(".html_container").hide()
  $(".view_container").hide()
  $(".create_container").show()
  // $(".module1").hide();
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
  var i = 0
  $('#addButton').on('click', function() {
    add()
    var moduleID
    var saveButtonID
    var positionID
    var headerTextID
    var headerSizeID

    function add() {
      var dynamicID = `ddlViewBy${i++}`

      moduleID = `addModule${i++}`
      positionID = `positionID${i++}`
      headerTextID = `headerText${i++}`
      var large = `<div class="dropdown">
          <select id="${dynamicID}" name="dropdown" >
            <option class="dropdown-item" id = "blankmodule" value = "blank" >Choose Module</option>
            <option class="dropdown-item" id = "module1" value = "module1" >MODULE 1</option>
            <option class="dropdown-item" value = "module2" >MODULE 2</option>
            <option class="dropdown-item" value = "module3" >MODULE 3</option>
            </select>
        </div>`
      $(".create_container").append(large)
      $("[id^='ddlViewBy']").on("change", dropDownChange);
    }
    function dropDownChange(selectedObject) {
      var dropDownID = selectedObject.target.id
      var dropdown = document.getElementById(dropDownID.toString())

      if (dropdown) {
        dropdown.addEventListener('change', dropDownChange, false)
        var selectedValue = $("#" + dropDownID).val()
        saveButtonID = `saveButton${i++}`
        headerSizeID = `headerTextSize${i++}`
        imageSRCid = `imgLink${i++}`
        paraText = `paraText${i++}`
        ctaText = `ctaText${i++}`
        ctaLink = `ctaText${i++}`
        switch (selectedValue) {

  // *************  //MODULE 1// **************
          case "module1":
            var module1 = `<div class="module" id = "${moduleID}">
                <form action="/action_page.php" class="module_1_form" method="post">
                <div class="form-group">
                <label for="exampleFormControlSelect1">Position On Page</label>
                <select id="${positionID}" class="form-control">
                <option>Select Position</option>
                <option>1st</option>
                <option>2nd</option>
                <option>3rd</option>
                <option>4th</option>
                </select>
                </div>
                  <label for="headerText">Header Text</label>
                  <input type="text" name="headerText" id="${headerTextID}" value=""><br>
                  <label id="HeaderSize" for="headersize">Header Size</label>
                  <input type="number" name="headersize" id="${headerSizeID}" value="42px"><br>

                  <label id="img" for="img">Upload Image</label>
                  <input type="text" name="imgLink" id="${imageSRCid}" value=""><br>

                  <input type="file" name="img" id="img" value=""><br>

                  <label for="paragraphText">Paragraph Text</label>
                  <textarea type="text" name="paragraphText" id="${paraText}" value=""></textarea><br>

                  <label for="ctaText">CTA TEXT</label>
                  <input type="text" name="ctaText" id="${ctaText}" value=""><br>

                  <label for="ctaLink">CTA LINK</label>
                  <input type="text" name="ctaLink" id=${ctaLink}" value=""><br>
                </form>
                <div class = "button_container">
                <button class="btn btn-secondary" type="button" id="${saveButtonID}" aria-haspopup="true" aria-expanded="false">SAVE ALL</button>
                  <button class="btn btn-secondary" type="button" id="deleteButton" aria-haspopup="true" aria-expanded="false">DELETE</button>
                </div>
              </div>`
            $(".create_container").append(module1)

            var selectedPostion
            $("[id^='positionID']").on("change", dropDownPositionChange);
            function dropDownPositionChange(selectedObject) {
              var select = document.getElementById(`${positionID.toString()}`);
              if (select) {
                select.addEventListener('change', dropDownPositionChange, false)
                $("[id^='positionID'] option:checked").each(function(input) {
                  selectedPostion = $(this).val();
                });
              }
            }

            //START UPLOAD IMAGE//
            function previewFile() {
              var preview = document.querySelector('img'); //selects the query named img
              var file = document.querySelector('input[type=file]').files[0]; //sames as here
              var reader = new FileReader();
            }
            previewFile()
            //END UPLOAD IMAGE//

            $('body').on("click", '#' + saveButtonID, function() {
              console.log(saveButtonID)
              var innerButtonText
              var savedButton = `${saveButton}`
              var stringButton = savedButton.toString()
              var headerText = $('#' + headerTextID).val()
              var imgUploadSRC = $("input[type=file][name=img]").val()
              var imgSRC = $('#' + imageSRCid).val()
              var paraTextSRC = $('#' + paraText).val()
              var ctaTextSRC = $('#' + ctaText).val()
              var ctaLinkSRC = $('#' + ctaLink).val()
              var headerTextSizeSRC = `${$('#' + headerSizeID).val()}px`

              var resultingBODY = `<div class="col-sm-6">
                      <img class = "img-responsive" id="viewImg" src="${imgSRC}" />
                      </div>
                      <div class="col-sm-6 flex_box_column">
                        <h1 id="viewh1_1st" style = "font-size: ${headerTextSizeSRC}" class="view1 text-center text-uppercase cx-heavy-brand-font">  ${headerText}  </h1>
                        <p class="cx-brand-font text-center" id="viewPara"> ${paraTextSRC}</p>
                        <div class="col-xs-12 flex_box_column " style="">
                          <div class="col-xs-11 col-sm-12 col-md-12 col-lg-10 cx-heavy-brand-font">
                            <a id="cta_href" href="${ctaLinkSRC}" class=" cx-button full-width  text-uppercase text-center">${ctaTextSRC}</a></div>
                        </div>
                      </div>`

              switch (selectedPostion) {
                case "1st":
                  $(".FIRST_VIEW_CONTAINER").append(resultingBODY)
                  break;

                case "2nd":
                  $(".SECOND_VIEW_CONTAINER").append(resultingBODY)
                  break;
              }

              $("[id^='saveButton']").html("SAVED")
            })
            break;

  // ********//MODULE 2****************************
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

  })

  // $("#ddlViewBy").on("change", dropDownChange);

}
