// @ts-check

const {MONKEY,Monkey} = require('./monkeyType');

/**
 * @type {MONKEY}
 */
var monkey = (function(){
  /**
   * An array that will contain list of lower level/z-index tabbable element(element that focus should return to if a modal or dropdown is exited)
   * 
   * It is an array to accommodate multiple level/z-index climbing
   * @type {Monkey.PreviousFocusables|[]}
   */
  var prevFocus = [];

  /**
   * Info about the branch with focus or the presently active floor element
   * @type {Monkey.PresentBranch|Monkey.floorElem}
   */
  var presentBranch = {};





  // * PRIVATE FUNCTIONS
  /**
   * pass the event listener needed to trap focus in a modal or dropdown
   */
  function climbingFunc(){

  }

  /**
   * remove the event listener that trap focus to a modal
   */
  function decendingFunc(){

  }

  

  // * UTILITY FUNCTIONS
  /**
   * Return the active element if focus is on any floor element, but return branch info if active element is on a branch
   * 
   * @return {{level:'floor'|'branch',branch:Monkey.PresentBranch,element:Monkey.floorElem}}
   */
  function active(){

  }






  // * PUBLIC FUNCTIONS
  function start(){
    // Default branch
    

    
  }

  /**
   * 
   * @param {boolean|'up'|'down'} direction Deetermine if the focus should be moved to another branch or returned to the previous branch/floor
   * @param {HTMLElement} branchElement the modal or dropdown container
   * @param {boolean} isDropdown to know if the branch to move to is a dropdown, it affect the way keyboard keys act
   */
  function climb(direction, branchElement, isDropdown){
    
    if(direction===true || direction==='up'){
      // if climbing up

      // Store previous focus, register new branch
      // focus should be placed on the branch element, it will be the first focusable element and the exit btn will be the last focusable element on for the branch(for a modal)
      // add event that listen for key down and use it to navigate the branch

      // Storing Previous Focus
      var activeElement = active();
      if(activeElement.level==='floor'){
        prevFocus = [activeElement.element]
      } else {
        // Push static Branch info to list of previous focus
        prevFocus[prevFocus.length] = activeElement.branch;
      }

      // Focus `branchElement` and pass the present Branch to `presentBranch`
      // add all the elements inside modal which need to be focusable
      var focusableElementSelectors =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      /**
       * @type {NodeListOf<HTMLElement>}
       */
      var focusableElements = branchElement.querySelectorAll(focusableElementSelectors);

      branchElement.focus()

      presentBranch = {
        firstFocusableElement:branchElement,
        lastFocusableElement:focusableElements[focusableElements.length-1],
        focusedElement:branchElement
      };

    } else {
      // if going down

    }
  }

  function jump(){

  }

  function on(eventName, callBack){

  }

  /**
   * Update the focusable element in a branch
   */
  function refreshBranch(){

  }

  return {
    active:active,
    climb:climb,
    jump:jump,
    on:on,
    start:start,
    refreshBranch:refreshBranch,
  }
})

// NOTE: terms and meaning
//   BRANCH - focus level, modal or dropdown menu
//   FLOOR - document floor (not modal, not dropdown)
//   TREE - Navigation/History state