'use strict';

// вызываю все селекторы иконок
const likeElems = document.querySelectorAll('i');
// назначаю обработку события клика; назначаю вызов ф-ии addLike
likeElems.forEach((likeEl) => {
  likeEl.addEventListener('click', addLike);
});

/* Ф-ия получает эл-т, по которому был клик и закрашивает соотв. сердечко. 
* Переменная zeroLikesHeart проверяет, нет ли лайка и в этом случае -класс far, 
* +fas; иначе наоборт.
*@param {MouseEvent} event
*/
function addLike(event) {
  let likeEl = event.target;
  let zeroLikesHeart = likeEl.classList.contains('far');
  if (zeroLikesHeart) {
    likeEl.classList.remove('far');
    likeEl.classList.add('fas');
  } else {
    likeEl.classList.remove('fas');
    likeEl.classList.add('far');
  }
}