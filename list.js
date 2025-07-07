const urlParams = new URLSearchParams(location.search);
const key = urlParams.get("key");

if (key === "MY_SECRET_KEY") {
  window.redirectMap = {
    abc: "https://example.com/page1",
    xyz: "https://example.org/page2"
  };
} else {
  window.redirectMap = {}; // wrong key = no redirect
}
