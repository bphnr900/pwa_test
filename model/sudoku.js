export class Sudoku{
    constructor() {
        this.board = [];

        for (let row = 0; row < 9; row++) {
            this.board[row] = [];

            for (let col = 0; col < 9; col++) {
                this.board[row][col] = 0;
            }
        }
    }
}