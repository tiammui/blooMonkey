
type floorElement = HTMLElement;
interface ActiveInfo{
  level:'floor'|'branch',
  /**
   * Present Branch with focus
   * 
   * Is available if `ActiveInfo.level` === "branch"
   */
  branch:BranchInfo,
  /**
   * Present Element with focus
   * 
   * Is available if `ActiveInfo.level` === "floor"
   */
  element:Monkey.floorElem
}


/**
 * Branch info
 */
interface BranchInfo {
  firstFocusableElement:HTMLElement,
  lastFocusableElement:HTMLElement,
  focusedElement:HTMLElement
  type:'modal'|'dropdown'
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
  export type Branch = BranchInfo;

  /**
   * Contain branches to return focus to on calling of `monkey.decend()`
   * 
   * first index contain the floor Element to return focus to, unlike the remaining index that contain Branches object
   */
  export type PreviousFocusables = [floorElement,...BranchInfo[]];

  export type floorElem = floorElement;

  export type Active = ActiveInfo;
}

export {MONKEY,Monkey}