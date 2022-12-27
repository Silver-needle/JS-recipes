let player = {
  x: 0,
  y: 0,

  /** Метод будет задаватьпользователю новое расположение.
   * @param {{x: int, y: int}} nextPoint координаты, куда ставим пользователя.
   */

  changePosition(nextPoint) {
    this.x = nextPoint.x;
    this.y = nextPoint.y;
  },
};