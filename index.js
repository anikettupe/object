Q1 function Check(obj1){
  obj1.setter = function(){
    console.log(obj1.name)
  }
   
}

Q2 function Check(obj1) {
    delete obj1.rollno;
    return obj1
       
  }

  Q3 function Check(obj1) {
    if(obj1.salary>500000)
    {
      return 'Dream'
    }
    return 'NotDream'
      
  }

  Q4 function Check(obj1) {
    var count=0
    for(let key in obj1)
    {
      count++
    }
    if(count===0)
    {
      return "false"
    }
    else
    {
      return "true"
    }
     
  }

  Q5 function Check(obj1,obj2) 
    let obj3= Object.assign(obj1, obj2)
    return obj3

  Q6 function Check(a,obj1) {
    obj1.id = obj1.id*a
    obj1.houseno = obj1.houseno*a
    return obj1
  
  } 

  Q7  function Check(obj1) {
    let sum = obj1.p1 + obj1.p2 + obj1.p3
    return sum;
    
      
  }

  Q8 function check(obj1,a,b) {
    if(obj1.name === a && obj1.id === b) {
      return "true";
    }
    else {
      return "false"
    }
      
  }