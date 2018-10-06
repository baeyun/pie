$(document).ready(function() {
  var screen = $('#screen')
  
  $('.CALC').on('click', function() {
    if (screen.text() === '0')
      screen.text('')
    screen.text(screen.text() + $(this).text())
  })
  
  // Clear screen
  $('#clear-screen').on('click', function() {
      screen.css('color', '#fff')
      screen.text('0')
  })

  // Solve
  $('#equals').on('click', function() {
    try {
      screen.text(eval(screen.text()))
    } catch (e) {
      screen.text('Syntax Error')
      screen.css('color', 'pink')
    }
    // alert(eval(screen.text()))
  })

  // Delete
  $('#del').on('click', function() {
    var parts = screen.text().split('')

    if (parts.join('') === '0')
      return
    
    parts.pop()
    screen.text(parts.join(''))
  })

  function blinker() {
    $('.blink-me').fadeOut(200);
    $('.blink-me').fadeIn(200);
  }

  setInterval(blinker, 500);
})
