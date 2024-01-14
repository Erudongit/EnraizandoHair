const openSidebarButton = document.querySelector(".headerMobile");
const openSidebarButtonChildren = openSidebarButton.children[0];
const closeSidebarButton = document.querySelector(".closeSidebar");
const sidebar = document.querySelector(".sidebar");
const header = document.querySelector("#header");
const scrollUp = document.querySelector('.scrollUp')

openSidebarButton.addEventListener('click', function (event) {
    sidebar.classList.add("showSidebar");
});

closeSidebarButton.addEventListener('click', function (event) {
    sidebar.classList.remove("showSidebar");
});

document.addEventListener('click', function (event) {
    if ((event.target !== openSidebarButton) && (event.target !== openSidebarButtonChildren) && (event.target !== sidebar)) {
        sidebar.classList.remove("showSidebar");
    }
})

let lastScroll = 250;
window.addEventListener('scroll', () => {
    if ((this.scrollY >= lastScroll) && (lastScroll > 250)) {
        header.classList.remove("showHeader");
    }
    else {
        header.classList.add("showHeader");
    }

    lastScroll = this.scrollY;
})

window.addEventListener('scroll', () => {
    if (this.scrollY >= 250) scrollUp.classList.add("showScrollUp"); else scrollUp.classList.remove("showScrollUp");
})

scrollUp.addEventListener('click', () => {
    scrollUp.classList.remove("showScrollUp");
})