// script.js

// ページが読み込まれたら実行
document.addEventListener("DOMContentLoaded", () => {
  // ① 自己紹介ボタン機能
  const helloBtn = document.getElementById("helloBtn");
  const introArea = document.getElementById("introArea");

  if (helloBtn && introArea) {
    helloBtn.addEventListener("click", () => {
      introArea.textContent = "こんにちは！itstudy31 です。Web 開発を勉強中です！";
    });
  }

  // ② トップに戻るボタン
  const topBtn = document.getElementById("topBtn");
  if (topBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        topBtn.style.display = "block";
      } else {
        topBtn.style.display = "none";
      }
    });

    topBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

