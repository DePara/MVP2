//console.log("effect.js carregado");

function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove click on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.button'), 0).forEach(function(bt) {
  bt.addEventListener('mouseover', function(e) {
    e.preventDefault();
  });
});

initBt1();
initBt2();/*
initBt3();
initBt4();
initBt5();
initBt6();
initBt7();
initBt8();
initBt9();
initBt10();*/

// Button 1
function initBt1() {

  var bt1 = document.querySelectorAll('#component-1')[0];
  var $circlesTopLeft = bt1.querySelectorAll('.circle.top-left');
  var $circlesBottomRight = bt1.querySelectorAll('.circle.bottom-right');

  var tl = new TimelineLite();
  var tl2 = new TimelineLite();

  var btTl = new TimelineLite({ paused: true });

  tl.to($circlesTopLeft, 1.2, { x: -25, y: -25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
  tl.to($circlesTopLeft[0], 0.1, { scale: 0.2, x: '+=6', y: '-=2' });
  tl.to($circlesTopLeft[1], 0.1, { scaleX: 1, scaleY: 0.8, x: '-=10', y: '-=7' }, '-=0.1');
  tl.to($circlesTopLeft[2], 0.1, { scale: 0.2, x: '-=15', y: '+=6' }, '-=0.1');
  tl.to($circlesTopLeft[0], 1, { scale: 0, x: '-=5', y: '-=15', opacity: 0 });
  tl.to($circlesTopLeft[1], 1, { scaleX: 0.4, scaleY: 0.4, x: '-=10', y: '-=10', opacity: 0 }, '-=1');
  tl.to($circlesTopLeft[2], 1, { scale: 0, x: '-=15', y: '+=5', opacity: 0 }, '-=1');

  var tlBt1 = new TimelineLite();
  var tlBt2 = new TimelineLite();

  tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
  tlBt1.add(tl);

  tl2.to($circlesBottomRight, 1.2, { x: 25, y: 25, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
  tl2.to($circlesBottomRight[0], 0.1, { scale: 0.2, x: '-=6', y: '+=3' });
  tl2.to($circlesBottomRight[1], 0.1, { scale: 0.8, x: '+=7', y: '+=3' }, '-=0.1');
  tl2.to($circlesBottomRight[2], 0.1, { scale: 0.2, x: '+=15', y: '-=6' }, '-=0.1');
  tl2.to($circlesBottomRight[0], 1, { scale: 0, x: '+=5', y: '+=15', opacity: 0 });
  tl2.to($circlesBottomRight[1], 1, { scale: 0.4, x: '+=7', y: '+=7', opacity: 0 }, '-=1');
  tl2.to($circlesBottomRight[2], 1, { scale: 0, x: '+=15', y: '-=5', opacity: 0 }, '-=1');
  
  tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: -45 });
  tlBt2.add(tl2);

  btTl.add(tlBt1);
  btTl.to(bt1.parentNode.querySelectorAll('.button__bg'), 0.8, { scaleY: 1.1 }, 0.1);
  btTl.add(tlBt2, 0.2);
  btTl.to(bt1.parentNode.querySelectorAll('.button__bg'), 1.8, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 1.2);

  btTl.timeScale(2.6);

  bt1.addEventListener('mouseover', function() {
    btTl.restart();
  });
}


// Button 2
function initBt2() {
  var bt = document.querySelectorAll('#component-2')[0];
  var particleCount = 12;
  var colors = ['#DE8AA0', '#8AAEDE', '#FFB300', '#60C7DA']

  bt.addEventListener('click', function() {
    var particles = [];
    var tl = new TimelineLite();
    
    tl.to(bt.querySelectorAll('.button__bg'), 0.6, { scaleX: 1.05 });
    tl.to(bt.querySelectorAll('.button__bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 0.6);

    for (var i = 0; i < particleCount; i++) {
      particles.push(document.createElement('span'));
      bt.appendChild(particles[i]);

      particles[i].classList.add(i % 2 ? 'left' : 'right');
      
      var dir = i % 2 ? '-' : '+';
      var r = i % 2 ? getRandom(-1, 1)*i/2 : getRandom(-1, 1)*i;
      var size = i < 2 ? 1 : getRandom(0.4, 0.8);
      var tl = new TimelineLite({ onComplete: function(i) {
        particles[i].parentNode.removeChild(particles[i]);
        this.kill();
      }, onCompleteParams: [i] });

      tl.set(particles[i], { scale: size });
      tl.to(particles[i], 0.6, { x: dir + 20, scaleX: 3, ease: SlowMo.ease.config(0.1, 0.7, false) });
      tl.to(particles[i], 0.1, { scale: size, x: dir +'=25' }, '-=0.1');
      if(i >= 2) tl.set(particles[i], { backgroundColor: colors[Math.round(getRandom(0, 3))] });
      tl.to(particles[i], 0.6, { x: dir + getRandom(60, 100), y: r*10, scale: 0.1, ease: Power3.easeOut });
      tl.to(particles[i], 0.2, { opacity: 0, ease: Power3.easeOut }, '-=0.2');
    }
  });
}