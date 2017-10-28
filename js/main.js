let app = {
  vars: {
    colorPrimary: '#e31c3d',
    colorSecondary: '#02bfe7',
    windowHeight: document.documentElement.clientHeight,
    pageHeight: document.body.clientHeight
  },
  bindScrollHandlers: function() {
    let last_known_scroll_position = 0;
    let ticking = false;
    window.addEventListener('scroll', function(e) {
      last_known_scroll_position = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(function() {
          app.waypoints(last_known_scroll_position);
          ticking = false;
        });
      }
      ticking = true;
    });
  },
  waypoints: function (scroll_pos) {
    // does not use the waypoints library but i like the naming
    var waypoints = ['subtitle','section--beautiful','section--accessible','section--performant','section--responsive','section--more'];
    for (var i = 0; i < waypoints.length; i++) {
      var section = waypoints[i];
      let sectionEl = document.getElementsByClassName(section)[0];
      if (section == 'subtitle') {
        // stickyNav
        let section_scroll_position = sectionEl.offsetTop + sectionEl.offsetHeight;
        app.stickyNav(scroll_pos,section_scroll_position);
      } else if (!sectionEl.classList.contains('is-active')){
        // sections not active
        let section_scroll_position = sectionEl.offsetTop;
        app.handleSectionWaypoints(scroll_pos,section_scroll_position,sectionEl);
      } else {
        // sections are active
      }
    }
    return;
  },
  stickyNav: function(scroll_pos,section_pos) {
    if (scroll_pos >= section_pos) {
      document.getElementsByTagName('header')[0].classList.add('sticky');
    } else {
      document.getElementsByTagName('header')[0].classList.remove('sticky');
    }
  },
  handleSectionWaypoints: function(scroll_pos,section_pos,sectionEl) {
    // make header sticky when scrolling
    if (scroll_pos + (app.vars.windowHeight/2) >= section_pos) {
      // let CSS handle the animation/placement
      sectionEl.classList.add('is-active');
      // append lines
      app.lineAnimations.sectionLines(sectionEl);

    }
  },
  lineAnimations: {
    defineDefaults: function () {
      LineMaker.prototype.options = {
        // parent: Where to insert the lines container.
        // element: the DOM element or a string to specify the selector, e.g. '#id' or '.classname'.
        // position: Whether to prepend or append to the parent.element
        parent: {element: document.body, position: 'prepend'},
        // position: if fixed the lines container will have fixed position.
        position: 'absolute',
        // The lines settings.
        lines: []
      };
    },
    bodyLines: function() {
      // header line
      let lineHeaderHorz = {
        parent: {element: document.getElementsByTagName('header')[0], position: 'prepend'},
        lines: [
          app.defineLines('5em','-3%','100%',1,app.vars.colorSecondary,true,500,'easeInOutSine',100,'LeftRight')
        ]
      }
      app.makeLines(lineHeaderHorz);

      // body "timeline" vertical lines
      let lineBodyVert = {
        parent: {element: document.body, position: 'prepend'},
        lines: [
          app.defineLines('0','9.5%',2,app.vars.pageHeight + 150,app.vars.colorPrimary,true,1000,'easeInOutQuad',50,'TopBottom'),
          app.defineLines('0','10.5%',2,app.vars.pageHeight + 150,app.vars.colorPrimary,true,1000,'easeInOutQuad',50,'TopBottom')
        ]
      }
      app.makeLines(lineBodyVert);
    },
    sectionLines: function (sectionEl) {
      // horizontal line across section top
      let sectionLine = {
        parent: {element: sectionEl, position: 'prepend'},
        position: 'absolute',
        lines: [
          app.defineLines('0','-4%','100%',1,app.vars.colorSecondary,true,500,'easeInOutSine',100,'LeftRight')
        ]
      }
      app.makeLines(sectionLine);

      if (sectionEl.classList.contains('has-hidden-columns')) {
        sectionEl.classList.remove('has-hidden-columns');
      }
      // vertical lines along subsections
      let subsections = sectionEl;
      let subsectionLines = {
        parent: {element: sectionEl, position: 'prepend'},
        position: 'absolute',
        lines: [
          app.defineLines('0','0','100%',1,app.vars.colorSecondary,true,500,'easeInOutSine',100,'LeftRight'),
          app.defineLines('0','49.5%',1,'100%',app.vars.colorSecondary,true,500,'easeInOutQuad',150,'TopBottom'),
          app.defineLines('0','72.5%',1,'100%',app.vars.colorSecondary,true,500,'easeInOutQuad',150,'TopBottom')
        ]
      }
      app.makeLines(subsectionLines);
    },
    init: function() {
      app.lineAnimations.defineDefaults();
      app.lineAnimations.bodyLines();
    }
  },

  // helper method to define line params
  defineLines: function(top,left,width,height,color,hidden = true,duration,easing,delay,direction) {
    return {
      top: top,
      left: left,
      width: width,
      height: height,
      color: color,
      hidden: hidden,
      animation: {
        duration: duration,
        easing: easing,
        delay: delay,
        direction: direction
      }
    }
  },
  makeLines: function(options) {
    // options = object
    let lineMaker = new LineMaker(options);
    // set timer and call animate
    setTimeout(function() {
      lineMaker.animateLinesIn();
      let elements = document.getElementsByClassName('decolines');
      for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('role','presentation');
      }
    }, 250);
  },
  hideSectionColumns: function() {
    // hide with JS so that they are still visible if JS fails
    var sections = ['section--beautiful','section--accessible','section--performant','section--responsive'];
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      let sectionEl = document.getElementsByClassName(section)[0];
      sectionEl.classList.add('has-hidden-columns');
    }
  },
  init: function() {
    // debugging
    // console.log("App init");
    app.hideSectionColumns();
    app.bindScrollHandlers();
    app.lineAnimations.init();
  }
}

document.addEventListener('DOMContentLoaded', function() {
   app.init();
});
