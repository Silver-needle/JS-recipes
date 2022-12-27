renderer.renderBoard();
// событие обрабатывается при клике пользователя
window.addEventListener('keydown', function(event) {
 mover.makeStep(event);
});