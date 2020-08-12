// Wait for window load

$(window).on('load', function () {
    setTimeout(function () {
        $('.se-pre-con').hide()
    }, 1000);
});

//Nav configs

$(document).ready(function () {

  function setActive() {
      setTimeout(function () {
          var hash = window.location.hash.substr(1);

          if (hash) {
            $('a[href*="#"]').parent().removeClass('active');
            $('a[href="#' + hash + '"]').parent().addClass('active');
          }
      }, 15);
  }

  setActive(); // On Page Load
  $(window).trigger('hashchange');

  $('a[href*="#"]').click(function () { // On link click
      setActive();
  });

});





//Theme Config

// this one is jut to wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    const imgChange = document.getElementById('imgChange')
    if (storedTheme) {
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if (themeStylesheet.href.includes('light')) {
            themeStylesheet.href = 'dark-theme.css';
            imgChange.src="assets/images/moon.svg"
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-theme.css';
            imgChange.src="assets/images/sunlight.svg"
        }
        // save the preference to localStorage
        localStorage.setItem('theme', themeStylesheet.href);
    });
});

var themeToggler = document.getElementById('theme-toggle');

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem(
        'theme',
        document.body.classList.contains('dark') ? 'dark' : 'light'
    );
});

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

$(document).ready(function () {
    // new WOW().init();
});



/* Partical Js */

// particlesJS(
//     'particles-js',
  
//     {
//       particles: {
//         number: {
//           value: 40,
//           density: {
//             enable: true,
//             value_area: 2000,
//           },
//         },
//         color: {
//           value: '#009d63',
//         },
//         shape: {
//           type: 'circle',
//           stroke: {
//             width: 0,
//             color: '#a9a9a9',
//           },
//           polygon: {
//             nb_sides: 3,
//           },
//           image: {
//             src: 'img/github.svg',
//             width: 100,
//             height: 100,
//           },
//         },
//         opacity: {
//           value: 0.5,
//           random: false,
//           anim: {
//             enable: false,
//             speed: 1,
//             opacity_min: 0.1,
//             sync: false,
//           },
//         },
//         size: {
//           value: 5,
//           random: true,
//           anim: {
//             enable: false,
//             speed: 40,
//             size_min: 0.1,
//             sync: false,
//           },
//         },
//         line_linked: {
//           enable: true,
//           distance: 250,
//           color: '#009d63',
//           opacity: 0.4,
//           width: 1,
//         },
//         move: {
//           enable: true,
//           speed: 4,
//           direction: 'none',
//           random: false,
//           straight: false,
//           out_mode: 'out',
//           bounce: false,
//           attract: {
//             enable: false,
//             rotateX: 600,
//             rotateY: 1200,
//           },
//         },
//       },
//       interactivity: {
//         detect_on: 'canvas',
//         events: {
//           onhover: {
//             enable: true,
//             mode: 'repulse',
//           },
//           onclick: {
//             enable: true,
//             mode: 'push',
//           },
//           resize: true,
//         },
//         modes: {
//           grab: {
//             distance: 400,
//             line_linked: {
//               opacity: 1,
//             },
//           },
//           bubble: {
//             distance: 400,
//             size: 40,
//             duration: 2,
//             opacity: 8,
//             speed: 3,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//           push: {
//             particles_nb: 4,
//           },
//           remove: {
//             particles_nb: 2,
//           },
//         },
//       },
//       retina_detect: true,
//     }
//   );
  