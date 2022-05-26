export default function ({first_name, last_name, email, avatar }) {
  let template = document.querySelector(".template");
  let newTemplate = template.content.cloneNode(true);

  newTemplate.querySelector(".card")
  newTemplate.querySelector(".img").src = avatar;
  newTemplate.querySelector(".name").textContent = `${first_name} ${last_name}`;
  newTemplate.querySelector(".email").textContent = email;

  return newTemplate;
}