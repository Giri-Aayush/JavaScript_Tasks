function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
  }

  // we can rewrite it as

  function CheckAge(age){
    let message = age>18 ? true : confrim("Did your parents allow");
    return message;
  }