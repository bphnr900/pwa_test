export class GameController {
    constructor(model,view){
        this.model = model;
        this.view = view;
    }
    start() {
        this.view.draw(
            this.model.board
        );
    }
}