document.addEventListener("DOMContentLoaded", function () {
  // 1. 分析docs文件夹中的md文件，按照逐级文件夹名称，到md文档的一、二、三级标题，形成blogs.html中的导航栏
  const navMenu = document.getElementById("nav-menu");

  function buildNavigation() {
    fetch("docs") // 可能需要后端支持获取文件夹和文件列表
      .then((response) => response.json())
      .then((files) => {
        files.forEach((file) => {
          const listItem = document.createElement("li");
          const link = document.createElement("a");
          link.textContent = file.name; // 这里可能需要处理文件名
          link.href = "#"; // 这里需要设置点击后的跳转行为，下面会在解析 Markdown 时补充
          listItem.appendChild(link);
          navMenu.appendChild(listItem);
        });
      });
  }

  buildNavigation();

  // 2. 解析md文件，将其展示到网页当中
  function loadMarkdownFile(filename) {
    fetch(`docs/${filename}`)
      .then((response) => response.text())
      .then((markdown) => {
        const markdownContent = document.getElementById("markdown-content");
        markdownContent.innerHTML = marked(markdown); // 使用 marked.js 或其他 Markdown 解析库将 Markdown 转换为 HTML 并插入到页面中
      });
  }

  // 3. 导航栏点击对应md文件标题跳转到对应位置，显示出来
  navMenu.addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault(); // 阻止默认跳转行为
      const filename = event.target.textContent; // 获取文件名
      loadMarkdownFile(filename);
    }
  });
});
