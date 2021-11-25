//Constructor function
function Property(name, age, salary) {
  this.name = name;
  this.age = age;
  this.salary = salary;
  this.cleaning = function () {
    console.log("Cleaning is in process.....");
  };
}

var bellboy = new Property("sam", "25", "45000");
console.log(bellboy);
console.log(bellboy.salary);

var bellboy2 = new Property("ram", "29", ["55000", "5000"]); //can also take arrays as a parameter
console.log(bellboy2);

console.log(bellboy2.salary);
bellboy.cleaning();

//good method is to write object name with camel casing
//good method is to function name which is used to create object with capital letter= Constructor function
