// IMPORT MODULES STATEMENTS
// Must first install module (with npm install fx)

import default from "[module name]" // or
import { [specific subset of the library] } from "[module name]"

// default is the whole library as an object.
// If in {} the library object gets destructured, and you only import specific parts
// Examples:

import default from "lodash"; // Gets the whole lodash library (takes up a lot of space)
import { concat, differenceBy } from "lodash"; // Just gets the specific methods from the library
import default from "lodash/array" // Gets everything - but only from the array sub-library

// You can call the default anything you like:
import _ from "lodash"; // The whole library can now be called with '_'

// When using/calling functions/methods from libraries, you must use the (destructured) path by which you imported them
// Fx:

_.concat // or
_.differenceBy
// The library is an object that you can destructure and get its properties by using the . notation like with any other object.
// If you get specific parts of the object (like in line 12 above), you may have to leave out some of the path:
concat
differenceBy