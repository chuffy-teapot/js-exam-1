import newNode from "./newNode.js";

export default function(where, data) {
  let Fragment = document.createDocumentFragment();

  data.forEach((user) => {
    let userNode = newNode(user);

    Fragment.append(userNode);
  });

  where.innerHTML = "";
  where.append(Fragment);
}