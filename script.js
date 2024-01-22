let now = new Date();
document.querySelector(".year").textContent = now.getFullYear();
document.querySelector(".hour").textContent = now.getHours();
document.querySelector(".min").textContent = now.getMinutes();
document.querySelector(".sec").textContent = now.getSeconds();
document.querySelector(".day").innerHTML = now.getDate();
