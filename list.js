const urlParams = new URLSearchParams(location.search);
const key = urlParams.get("key");

if (key === "MY_SECRET_KEY") {
  window.redirectMap = {
    abc: "https://example.com",
    xyz: "https://google.com"
  };
  // Optional: console.clear();
} else {
  document.write("<h1>404 Not Found</h1>"); // ব্রাউজারে ভিজিট করলে শুধু এইটা দেখাবে
}
