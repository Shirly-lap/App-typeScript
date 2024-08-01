import NavBar from "./views/components/Navbar";
import About from "./views/pages/about";
import Contact from "./views/pages/Contact";
import Home from "./views/pages/Home";

const app = document.getElementById("app") as HTMLDivElement;
const render = async () => {
    app.innerHTML = NavBar();

    const path = window.location.pathname;
    let page;

    switch (path) {
        case '/about':
            page = About()
            break;
        case '/contact':
            page = Contact()
            break;
        default:
            page = await Home()
            break;
    }

    app.appendChild(page);
};
window.addEventListener('popstate', render);
window.addEventListener('load', render);

