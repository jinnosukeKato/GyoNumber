document.getElementById("input").addEventListener("input", (event) => {
  let row = 1;
  const result = event.target.value
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
