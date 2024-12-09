// 選擇選單元素
const   topDivMenu = document.getElementById('topDivMenu'),
        topButton = document.getElementById("topBtn");

// 點擊漢堡按鈕，顯示選單
function menuBtn() {
    topDivMenu.classList.remove('hidden');
    topDivMenu.classList.add('visible');
}

// 點擊關閉按鈕或鏈接，隱藏選單
function closeMenu() {
    topDivMenu.classList.remove('visible');
    topDivMenu.classList.add('hidden');
}

function scrollFunction() {
  if (window.innerWidth <= 768) {
    topButton.style.display = "none"; // 強制隱藏按鈕
  } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// 在頁面載入時和視窗改變時檢查
window.onscroll = scrollFunction;
window.onresize = scrollFunction;

// Smooth scrolling function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

