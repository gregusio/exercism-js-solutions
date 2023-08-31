//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(matrixInString) {
    this.rows = matrixInString.split('\n');
    this.columns = [];

    for (let i = 0; i < this.rows.length; i++) {
      this.rows[i] = this.rows[i].split(' ');
      for (let j = 0; j < this.rows[i].length; j++)
        this.rows[i][j] = Number(this.rows[i][j]);
    }

    let column = [];
    for (let i = 0; i < this.rows[0].length; i++) {
      for (let j = 0; j < this.rows.length; j++) {
        column.push(this.rows[j][i])
      }
      this.columns.push(column);
      column = [];
    }
  }
}
