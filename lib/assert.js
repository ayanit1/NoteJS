var assert = {
   isTrue: function(assertionToCheck, testName) {
     if (!assertionToCheck) {
       console.log("%cAssertion failed: " + testName + " is not truthy", "color:red; font-weight:bold");
     }
     else {
      console.log("%cYour " + testName + "test has passed. Lovely-jubbly", "color:green; font-weight:bold");
     }
   },

   isEqual: function(expected, actual, testName) {
     if (expected !== actual) {
       console.log("%cAssertion failed: expected: " + expected + " but got:" + actual + ".","color:red; font-weight:bold");
     }
       else {
         console.log("%cYour " + testName + " test has passed. Lovely-jubbly!", "color:green; font-weight:bold");
     }
   },

   contains: function(searchElement, actual, testName) {
     if (actual.includes(searchElement)) {
       console.log("%cYour " + testName + " test has passed. Yay!", "color:green; font-weight:bold");
     }
     else {
       console.log("%cExpected " + actual + " to include" + searchElement + " but it doesn't...what have you done?!", "color:red; font-weight:bold");
     }
   }
 };


 function test(tests) {


   for (var testName in tests) {
     if (testName === "beforeEach") {
       continue
     }

     if (tests.hasOwnProperty(testName) && typeof tests[testName] === "function") {
       if (tests.beforeEach) {

         tests.beforeEach()
       }
       tests[testName]()
     }
   }
 }
