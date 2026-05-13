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

// ------------------------------
// 3) Menu card drag scroll
// ------------------------------
const menuGrid = document.querySelector('.menu-grid');

if (menuGrid) {
  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  menuGrid.addEventListener('mousedown', (event) => {
    if (event.button !== 0) return;

    isDragging = true;
    startX = event.pageX;
    startScrollLeft = menuGrid.scrollLeft;
    menuGrid.classList.add('is-dragging');
  });

  menuGrid.addEventListener('mousemove', (event) => {
    if (!isDragging) return;

    event.preventDefault();
    const distance = event.pageX - startX;
    menuGrid.scrollLeft = startScrollLeft - distance;
  });

  const stopDragging = () => {
    isDragging = false;
    menuGrid.classList.remove('is-dragging');
  };

  menuGrid.addEventListener('mouseup', stopDragging);
  menuGrid.addEventListener('mouseleave', stopDragging);
  window.addEventListener('mouseup', stopDragging);
}
