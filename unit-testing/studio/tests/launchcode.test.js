// launchcode.test.js code:
const launchcode = require('../index.js');

describe("The launchcode object", function(){

  test("should have a property called organization", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });
  test("should have a property called executiveDirector", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  })
  test("should have a property called percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  })
  test("should have a property called programsOffered with 3 programs", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  describe("should have a method called launchOutput, which", function(){

    test("should return 'Launch!' for numbers evenly divisible by 2", function(){
      expect(launchcode.launchOutput(2)).toEqual("Launch!");
    });
    test("should return 'Code!' for numbers evenly divisible by 3", function(){
      expect(launchcode.launchOutput(3)).toEqual("Code!");
    });
    test("should return 'Rocks!' for numbers evenly divisible by 5", function(){
      expect(launchcode.launchOutput(5)).toEqual("Rocks!");
});
  





 
