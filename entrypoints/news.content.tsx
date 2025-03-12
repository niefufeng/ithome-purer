import "~/assets/news.content.css";

export default defineContentScript({
  matches: [
    "*://*.ithome.com/0/*/*.htm",
    "*://*.ithome.com/0/*/*.htm?*",
    "*://www.ithome.com/block/dajia.html",
    "*://www.ithome.com/block/dajia.html?*",
    "*://lapin.ithome.com/html/digi/*.htm",
  ],
  cssInjectionMode: "manifest",
  allFrames: true,
  async main(ctx) {
    // 大家都在看的iframe
    const dajiaIframeElement = document.querySelector("iframe.dajia") as HTMLElement | null;

    if (dajiaIframeElement) {
      // 使用js 设置行内样式，不然使用 css 设置只能使用 !important，animate 无法操作
      dajiaIframeElement.style.height = "33pc";
    }
  },
});
