export class BoardView{
    constructor(elementId) {
        this.area = document.getElementById(elementId);
    }
    draw(board) {
        this.area.innerHTML = "";
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                const cell = document.createElement("div");
                cell.textContent = board[row][col];
                this.area.appendChild(cell);
            }
        }
    }
}