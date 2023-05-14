const query = queryParams().q.replace(/\+/g, " ");

const redditLink =
  "https://www.reddit.com/search/?q=" + encodeURIComponent(query);
addLink("👾", "Reddit", redditLink);

function queryParams() {
  let query = location.search.substr(1);

  let result = {};
  query.split("&").forEach(function (part) {
    let item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function createLink(symbol, name, url) {
  const a = document.createElement("a");
  a.style.color = "#969ba1";
  a.style.margin = "0 0.5em";
  a.className += "search-reddit-link";

  const icon = document.createElement("span");
  icon.innerText = symbol;
  icon.style.marginRight = "0.5em";
  icon.style.fontWeight = "bold";

  a.append(icon);
  a.append(name);

  a.setAttribute("href", url);
  return a;
}

function addLink(symbol, name, url) {
  const link = createLink(symbol, name, url);
  document
    .querySelector('[aria-current="page"]')
    .parentElement.appendChild(link);
}
