import{Sudoku} from "./model/sudoku.js"
import{BoardView} from "./view/board.js"
import{GameController} from "./controller/GameController.js"

const model = new Sudoku();

const view = new BoardView("board");
const controller = new GameController(
    model,
    view
);

controller.start();





if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service Worker登録成功"))
            .catch((err) => console.error(err));
    });
}