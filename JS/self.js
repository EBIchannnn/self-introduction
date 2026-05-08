document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', function() {
    // タブ切り替え
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    // コンテンツ切り替え
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(this.dataset.tab).classList.add('active');
  });
});
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
});