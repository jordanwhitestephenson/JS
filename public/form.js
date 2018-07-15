$(document).ready(function() {
  //TAB FUNCTIONALITY
  $('#create').on('click', function() {
    $("#preview").removeClass('active')
    $("#html").removeClass('active')
    $("#create").addClass('active')

  })
  $('#html').on('click', function() {
    $("#create").removeClass('active')
    $("#preview").removeClass('active')
    $("#html").addClass('active')
  })
  $('#preview').on('click', function() {
    $("#create").removeClass('active')
    $("#html").removeClass('active')
    $("#preview").addClass('active')
  })
  //END TAB FUNCATIONALITY
})
