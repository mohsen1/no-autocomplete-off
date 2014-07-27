var CUSTOM_ATTR = 'data-fixed-mutated-autocomplete-by-extension';
var MAX_TRIES = 10;

// Some websites add a little script to add [autocomplete="off"]
// with a delay after initial page load to bypass plug-ins
// We try to remove bypass that this mutation observer system
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    var numberOfTries = +mutation.target.getAttribute(CUSTOM_ATTR);
    if(mutation.type === 'attributes' &&
        mutation.attributeName === 'autocomplete' &&
        mutation.target.getAttribute('autocomplete') === 'off' &&
        numberOfTries < MAX_TRIES){
        mutation.target.setAttribute(CUSTOM_ATTR,  numberOfTries + 1);
        mutation.target.setAttribute('autocomplete', 'on');
    }
  });
});

var mutationConfig = {
    attributes: true,
    childList: true,
    characterData: false
};

var els = document.querySelectorAll('[autocomplete]');

[].forEach.call(els, function (el) {
    el.setAttribute('autocomplete', 'on');
    observer.observe(el, mutationConfig);
});
