document.getElementById("addButton").addEventListener("click", () => {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").textContent = num1 + num2;
});
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => console.log("Service Worker登録成功"))
            .catch((err) => console.error(err));
    });
}