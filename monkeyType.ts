
type floorElement = HTMLElement;

/**
 * Branch info
 */
interface Branch {
  firstFocusableElement?:HTMLElement,
  lastFocusableElement?:HTMLElement,
  focusedElement?:HTMLElement
  
}

/**
 * Tree info
 */
interface Tree {
  name:string,
}

/**
 * The Bloo Monkey module type
 */
interface MONKEY{

}

/**
 * Bloo Monkey module development types
 * 
 * Do not use in integration of Bloo Monkey module to your app,
 *  it use for development of the module only
 */
namespace Monkey{
  export type PresentBranch = Branch;

  /**
   * Contain branches to return focus to on calling of `monkey.decend()`
   * 
   * first index contain the floor Element to return focus to, unlike the remaining index that contain Branches object
   */
  export type PreviousFocusables = [floorElement,...Branch[]];

  export type floorElem = floorElement;
}

export {MONKEY,Monkey}