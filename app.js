(()=>{var e,t,n;document.querySelectorAll(".inner-item").forEach((function(e){return t=e,(n=new IntersectionObserver((function(e){e.some((function(e){return e.intersectionRatio>0}))?t.style.transform="translate(0,0)":t.style.transform="translate(-20rem,0)"}))).observe(t),n;var t,n})),e=document.querySelector(".title"),t=document.querySelector(".subtitle"),n=document.querySelector(".description"),setTimeout((function(){e.classList.add("change"),setTimeout((function(){t.classList.add("change"),setTimeout((function(){n.classList.add("change")}),200)}),200)}),200)})();