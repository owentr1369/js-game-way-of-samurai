const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

// canvas size
canvas.width = 1024;
canvas.height = 576;

c.fillRect(0, 0, canvas.width, canvas.height);
