document.getElementById("input").addEventListener("input", (event) => {
  document.getElementById("result").value = event.target.value
  .split("\n")
  .map((line, index) => `${index + 1} ${line}`)
  .join("\n");
});
