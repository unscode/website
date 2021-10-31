import "./index.css"

(function (window: Window) {
    window.addEventListener("load", (event: Event) => {
        document.body.setAttribute("data-timestamp", event.timeStamp.toString())
        
        const time = new Date().getTime()
        document.body.setAttribute("data-load", time.toString());
        document.body?.classList?.add?.("loaded");
    });
}(window));