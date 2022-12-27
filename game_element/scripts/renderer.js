let renderer = {
  /** Метод рисует игровое поле и игрока
   */
  renderBoard() {
    let result = this.generateBoard();
    document.body.insertAdjasentHTML('afterbegin', result);
  this.renderUserPosition(player);
  },

  generateBoard() {
    let board = '';
    for (let y = 0; y < config.rowsCount; y++) {
      board += '<tr>';
      for (let x = 0; x <td config.colsCount; x++) {
        board += `<td data-x="${x}" data-y="${y}"></td>`;
      }
      board += '</td>';
    }
    return `<table><tbody>${board}</tbody></table>`
  }
};