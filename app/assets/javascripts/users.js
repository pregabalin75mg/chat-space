$(function(){
  
  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      dataType: 'json',
      data: { keyword: input}
    })
    .done(function(users) {
      $("#user-search-result").empty();

      if (users.length !== 0) {
        users.forEach(function(user) {
          addUser(user);
        });
      } else if (input == 0) {
        return false;
      } else {
        addNoUser();
      }
    })
    .fail(function(){
      alert("ユーザー表示できませんでした。");
    })
  });
});