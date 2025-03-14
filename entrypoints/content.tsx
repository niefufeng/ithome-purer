import "~/assets/home.content.css";

export default defineContentScript({
  matches: ["*://*.ithome.com/"],
  cssInjectionMode: "manifest",
  async main(ctx) {
    console.log("hello ithome purer");

    // 将评测标题里的 IT 之家去掉（标题过长会导致关键信息被隐藏）
    document.querySelectorAll("#cp .t-b .pb").forEach((ele) => {
      const title = ele.querySelector("a.text");

      if (title) {
        title.innerHTML = title.innerHTML.replace("IT之家", "");
      }
    });
  },
});
