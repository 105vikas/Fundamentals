// Hosting - it refer to the process whereby the interpreter appears to move the declaration of func, variable, class & import to the top of their scope, prior to execution of the code

// Temporal Dead Zone is specific period in exicution of Javascript code where variable let & const exit but can not be assigned any value.

// Scope, Scope chaning - it is cureent context of execuiton in which value & expression are visible or can be referenced, Scopes can also be layered in hierachy so that child scope have access the parent scope but not vice versa.
// Block, Function scope
// Global scope: the default scope for all code runing in script mode
// function scope: the scope created with a function
// Block scope: the scope create with a pair of curly braces

// Lexical Enviroment is data structure that store all the variables & function defined in the current scope along with the refernce to all outer scope.

// Legal & illegal shadowing like we redeclare the var with let it is legal but when redeclaring the let with var it is illegal