// Awalnya sidebar tertutup
let sidebarTerbuka = false;

function toggleNav() {
    if (sidebarTerbuka) {
        // Tutup Sidebar
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        sidebarTerbuka = false;
    } else {
        // Buka Sidebar
        document.getElementById("mySidebar").style.width = "280px";
        // Di layar laptop, geser konten. Di HP biarkan menumpuk
        if (window.innerWidth > 768) {
            document.getElementById("main").style.marginLeft = "280px";
        }
        sidebarTerbuka = true;
    }
}