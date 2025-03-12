import "~/assets/search.content.css";

export default defineContentScript({
  matches: ["*://*.ithome.com/search/*.html", "*://*.ithome.com/tags/*/"],
  cssInjectionMode: "manifest",
  async main(ctx) {},
});
