document.getElementById("exec").addEventListener("click", (event) => {
  const input = document.getElementById("input");

  let row = 1;
  const result = input.value
    .split("")
    .reduce((accumulator, char) => {
      if (char === "\n"){
        row += 1;
        return accumulator + char + `${row} `;
      }
      else
        return accumulator + char;
    }, row + " ");

    document.getElementById("result").value = result;
});
