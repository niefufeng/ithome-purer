import "./App.css";

function App() {
  return (
    <div className="w-125 p-8 text-lg leading-8 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
      <div className="text-2xl font-bold">欢迎使用 ithome purer</div>
      <p>本项目采用 wxt、react、tailwindcss 开发</p>
      <p>如有任何问题，请前往 github 提交 issue</p>
      <p>
        <span>github：</span>
        <a target="_blank" className="text-blue-500" href="https://github.com/niefufeng/ithome-purer">
          https://github.com/niefufeng/ithome-purer
        </a>
      </p>
    </div>
  );
}

export default App;
