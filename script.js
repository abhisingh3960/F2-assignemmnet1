let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  // PrintDeveloperbyMap
//   console.log all the employees which have the profession of developer using the map function.
  function PrintDeveloperbyMap() {
    arr.map((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  // PrintDeveloperbyForEach
//   PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
  function PrintDeveloperbyForEach() {
    arr.forEach((employee) => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  //addData
//   Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    arr.push(newEmployee);
    console.log(arr);
  }
  
  // removeAdmin
//   removeAdmin() - In this function remove the object where the profession is admin. console.log the changed array.

  function removeAdmin() {
    const filteredArr = arr.filter((employee) => employee.profession !== "admin");
    console.log(filteredArr);
  }
  
  // concatenateArray
//   Make another array with 3 objects just like the one in the above given array.
  function concatenateArray() {
    const newArr = [
      { id: 4, name: "mike", age: "21", profession: "developer" },
      { id: 5, name: "sara", age: "22", profession: "admin" },
      { id: 6, name: "chris", age: "23", profession: "designer" },
    ];
  
    const concatenatedArray = arr.concat(newArr);
    console.log(concatenatedArray);
  }
  