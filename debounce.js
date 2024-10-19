function debounce(func, delay) {
  let timer = null; //store the timer id
  return function () {
    let context = this; //stores this context (if used) for use in timeout
    let args = arguments; //args passed to the function
    clearTimeout(timer); //clear the timer to  prevent previous execs
    timer = setTimeout(function () {
      func.apply(context, args); //call original func ith stored context  and args
    }, delay);
  };
}

function opDebounce(func, delay, opt) {
  var timer = null; //track the delay
  var first = true; //flag to track 1st call
  var leading; //flag  to  track leading edge behavior
  if (typeof opt === "object") {
    leading = !!opt.leading; // Toggle leading behavior based on the passed options
  }
  return function () {
    var context = this;
    var args = arguments;
    if (first && leading) {
      func.apply(context, args);
      first = false;
    }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
}
