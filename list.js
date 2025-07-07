const urlParams = new URLSearchParams(location.search);
const key = urlParams.get("key");

if (document.currentScript && document.currentScript.tagName === 'SCRIPT' && key === "MY_SECRET_KEY") {
  window.redirectMap = {
    abc: "https://example.com",
    xyz: "https://google.com"
  };
  // Optional: console.clear();
} else {
  // সরাসরি ব্রাউজারে খোলা হয়েছে (বা iframe, অন্য কিছু)
  document.body.innerHTML = "<h1>Access Denied or Nothing to see here</h1>";
}
