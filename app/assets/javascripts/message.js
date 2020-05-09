$(function(){
      function buildHTML(message){
        if ( message.image ) {
          var html =
            `<div class="chat-main">
              <div class="chat-main__massage">
                <div class="chat-main__massage__user">
                  <div class="chat-main__massage__user__UserName">
                    ${message.user_name}
                  </div>
                  <div class="class="chat-main__massage__user__date">
                    ${message.created_at}
                  </div>
                </div>
                <div class="chat-main__message__UserMessage">
                  <p div class="chat-main__message__UserMessage__content">
                    ${message.content}
                  </p>
                </div>
                <img src=${message.image} >
              </div>
            </div>`
          return html;
        } else {
          var html =
            `<div class="chat-main">
              <div class="chat-main__massage">
                <div class="chat-main__massage__user">
                  <div class="chat-main__massage__user__UserName">
                    ${message.user_name}
                  </div>
                  <div class="class="chat-main__massage__user__date">
                  ${message.created_at}
                  </div>
                </div>
                <div class="chat-main__message__UserMessage">
                  <p div class="chat-main__message__UserMessage__content">
                    ${message.content}
                  </p>
                </div>
              </div>
            </div>`
          return html;
          };
        }
  $('#new_message').on('submit',function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    console.log(formData)
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});