var demo = (function() {

  var _demoState = (function() {
    var demoState = false;
    var get = function(state) {
      return demoState;
    };
    var set = function(state) {
      demoState = state;
    };
    // exposed methods
    return {
      set: set,
      get: get
    };
  })();

  function _createDemoNotice() {
    var section = document.createElement("div");
    section.setAttribute("class", "l-section m-demo js-demo");
    var card = document.createElement("div");
    card.setAttribute("class", "m-card");
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "m-card-body");
    var demo = document.createElement("div");
    var heading = document.createElement("h1");
    heading.setAttribute("class", "m-demo-heading");
    heading.textContent = "Demo character";
    var description = document.createElement("p");
    description.setAttribute("class", "m-demo-description");
    description.innerHTML = "A <strong>Demo Character</strong> for you to explore. To get started with your own, use the <strong>Character Select</strong> menu or:";
    var addButton = document.createElement("button");
    addButton.setAttribute("class", "m-demo-add-new-character button");
    addButton.textContent = "Add new character";
    addButton.addEventListener("click", function() {
      sheet.add();
    }, false);
    demo.appendChild(heading);
    demo.appendChild(description);
    demo.appendChild(addButton);
    cardBody.appendChild(demo);
    card.appendChild(cardBody);
    section.appendChild(card);
    return section;
  };

  function render() {
    var sectionWrapper = helper.e(".js-section-wrapper");
    var demoSection = helper.e(".js-demo");
    var demo = helper.getObject({
      object: sheet.get(),
      path: "awesomeSheet.demo"
    });
    if (demo) {
      if (!_demoState.get()) {
        sectionWrapper.insertBefore(_createDemoNotice(), sectionWrapper.firstChild);
        _demoState.set(true);
      };
    } else {
      if (_demoState.get()) {
        demoSection.remove();
        _demoState.set(false);
      };
    };
  };

  // exposed methods
  return {
    render: render
  };

})();