function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  // in terms of arrow function
  
  let ask = (question, yes, no) => {
    if(confirm(question)) yes();
    else no();
  }

  ask("Do you agree?", ()=> alert("You agreed"), ()=> alert("You cancelled the execution"));