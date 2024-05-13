document.querySelector("nav>ul>li>a[href='#start']").addEventListener("click",function(event){
    document.querySelectorAll("nav>ul>li>a").forEach(function(link) {
        link.classList.remove("active");
    });

    this.classList.add("active");
});

document.querySelector("nav>ul>li>a[href='#aboutme']").addEventListener("click",function(event){
    document.querySelectorAll("nav>ul>li>a").forEach(function(link) {
        link.classList.remove("active");
    });
    this.classList.add("active");
});

document.querySelector("nav>ul>li>a[href='#proceedings']").addEventListener("click",function(event){
    document.querySelectorAll("nav>ul>li>a").forEach(function(link) {
        link.classList.remove("active");
    });
    this.classList.add("active");
});

document.querySelector("nav>ul>li>a[href='#gallery']").addEventListener("click",function(event){
    document.querySelectorAll("nav>ul>li>a").forEach(function(link) {
        link.classList.remove("active");
    });
    this.classList.add("active");
});

document.querySelector("nav>ul>li>a[href='#contactme']").addEventListener("click",function(event){
    document.querySelectorAll("nav>ul>li>a").forEach(function(link) {
        link.classList.remove("active");
    });
    this.classList.add("active");
});
