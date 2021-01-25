window.setTimeout( () => {
    target.style.removeProperty('height'); /* [13] */
    target.style.removeProperty('overflow'); /* [14] */
    target.style.removeProperty('transition-duration'); /* [15.1] */
    target.style.removeProperty('transition-property'); /* [15.2] */
  }, duration);

let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
}