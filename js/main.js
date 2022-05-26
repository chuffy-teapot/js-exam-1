import render from "./render.js"

let list = document.getElementById("list");

async function first() {
  const fetchGet = await fetch("https://reqres.in/api/users");
  let fetchWait = await fetchGet;

  if (fetchWait.ok) {
    let data = (await fetchWait.json()).data;
    render(list, data);
  }
}

first()