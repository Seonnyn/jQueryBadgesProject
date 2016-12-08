$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Seonnyn.json',
    type: 'GET',
    datatype: 'jsonp',
    success: function(response) {
      console.log(response);
      $.each(response.courses.completed, function(ind, elem) {
        console.log(elem);
        $('#badges').append('<div class="course"><h3>'+elem.title+'</h3><img src="'+elem.badge+'" /><a href="'+elem.url+'" target="_blank" class="btn btn-primary">See Course</a></div>');
      });
    },
  });

});
