// ======================================
// ししまるキッチンカー LP - JavaScript
// - 初心者でも追いやすいように機能ごとに分離
// - 1) モバイルメニュー開閉
// - 2) 出店情報フィルター
// ======================================

// ------------------------------
// 1) モバイルメニュー開閉
// ------------------------------
const menuToggle = document.querySelector('.menu-toggle');
const globalNav = document.querySelector('.global-nav');

if (menuToggle && globalNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = globalNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// ------------------------------
// 2) 出店情報フィルター
// ------------------------------
const filterButtons = document.querySelectorAll('.chip');
const scheduleItems = document.querySelectorAll('.schedule-item');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // 見た目のアクティブ状態を更新
    filterButtons.forEach((btn) => btn.classList.remove('is-active'));
    button.classList.add('is-active');

    // 押されたボタンの種別を取得
    const filter = button.dataset.filter;

    // 各出店情報の表示/非表示を切り替え
    scheduleItems.forEach((item) => {
      const dayType = item.dataset.day;

      if (filter === 'all' || filter === dayType) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
