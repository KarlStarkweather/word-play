$(document).ready(function() {
  let words = [1,2];
  let val;
  let w;
  let x;
  let words2 = [];

  $("#sentence").submit(function() {
    
    val = $("#inputBox").val();
    words=val.split(" ");
    
    words.forEach(function(word) {
      w=word;

      w= w.split("").reverse();
      x = w.join("");
      words2.push(x);
    });
    alert(words2);
  });
});