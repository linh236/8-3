$(document).ready(function() {
  const config = {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 50,
    traceLength: 5,
    traceSpeed: 2,
    explosion: 30,
    intensity: 40,
    flickering: 50,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 60
    },
    rocketsPoint: {
      min: 50,
      max: 50
    },
    lineWidth: {
      explosion: {
        min: 1,
        max: 3
      },
      trace: {
        min: 1,
        max: 2
      }
    },
    brightness: {
      min: 50,
      max: 80
    },
    decay: {
      min: 0.015,
      max: 0.03
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  }
  
  $(".box-body").mouseover(function() {
    $(".fireworks").css("display", "block");
  })
  $(".box-body").mouseout(function() {
    $(".fireworks").css("display", "none");
  })
  const container = document.querySelector('.fireworks')
  const fireworks = new Fireworks.default(container, config)
  fireworks.start()
})  
