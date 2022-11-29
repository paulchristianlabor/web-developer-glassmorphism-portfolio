var isNavOpen = false

function openNav() {
    document.getElementById("main-nav").classList.add("navopen")
    document.getElementById("main-nav").classList.remove("navclose")
}

function closeNav() {
    document.getElementById("main-nav").classList.add("navclose")
    document.getElementById("main-nav").classList.remove("navopen")
}

function onClick() {
    isNavOpen = !isNavOpen
    if (isNavOpen) {
        openNav()
    }
    else {
        closeNav()
    }
}