function clearResult() {
    document.getElementById("result").value = "";
  }
  
  function appendValue(value) {
    document.getElementById("result").value += value;
  }
  
  function calculate() {
    try {
      const result = eval(document.getElementById("result").value);
      document.getElementById("result").value = result;
    } catch (error) {
      alert("Invalid expression");
    }
  }
