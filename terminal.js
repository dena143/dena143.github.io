let css = document.createElement("link");
css.setAttribute("rel","stylesheet");
css.setAttribute("href","stylesheet.css");
document.getElementsByTagName("head")[0].appendChild(css);

let myjs = document.createElement("script");
myjs.type = "text/javascript";
myjs.src = "jvscript";
document.getElementsByTagName("head")[0].appendChild(myjs);