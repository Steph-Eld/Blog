$(document).ready(() => {
  $('.show-More').on('click', () => {
    $('.hidden').show().css('visibility','visible');
  });

  $('.comment').on('click', function() {
	$(this).parent().find('.comment-Block').show();
  });

  const button = '.likeButton';
  const counter = '.likeCounter';
  
  function counterIncrease(){
    let counterText = $(this).parent().find(counter)
    let value = counterText.text();
    value = parseInt(value) + 1;
    $(counterText).text(value);
  }
  
  $(button).on('click', counterIncrease);
  
});