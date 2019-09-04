/**
 * Type declerations for global development variables
 */

// tslint:disable:interface-name

declare var context: any;
declare var dispatch: any;

interface Window {
  // A hack for the Redux DevTools Chrome extension.
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
  __INITIAL_STATE__?: any;
}
