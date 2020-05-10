$(function(){
      function buildHTML(message){
        if ( message.image ) {
          var html =
            `
              <div class="chat-main__message__user">
                <div class="chat-main__message__user__UserName">
                  ${message.user_name}
                </div>
                <div class="chat-main__message__user__date">
                  ${message.created_at}
                </div>
              </div>
                <div class="chat-main__message__UserMessage">
                <p class="chat-main__message__UserMessage__content">
                  ${message.content}
                </p>
                <img src=${message.image} >
              </div>`
        return html;
        } else {
          var html =
            `
              <div class="chat-main__message__user">
                <div class="chat-main__message__user__UserName">
                  ${message.user_name}
                </div>
                <div class="chat-main__message__user__date">
                ${message.created_at}
                </div>
              </div>
              <div class="chat-main__message__UserMessage">
                <p class="chat-main__message__UserMessage__content">
                  ${message.content}
                </p>
              </div>`
        return html;
          };
        }
  $('#new_message').on('submit',function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message').append(html)
      $('.chat-main__message').animate({ scrollTop: $('.chat-main__message')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました")
    });
    .always(function() {
      $('.chat-main__form__submit-btn').prop('disabled', false);
    })
  });
});