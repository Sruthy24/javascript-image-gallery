const images=[

"https://picsum.photos/id/1015/600/400",
"https://picsum.photos/id/1025/600/400",
"https://picsum.photos/id/1035/600/400",
"https://picsum.photos/id/1043/600/400",
"https://picsum.photos/id/1050/600/400",
"https://picsum.photos/id/1069/600/400"

];

const gallery=document.getElementById("gallery");

const large=document.getElementById("largeImage");

images.forEach(function(image){

const img=document.createElement("img");

img.src=image;

img.addEventListener("click",function(){

large.src=image;

});

gallery.appendChild(img);

});

large.src=images[0];
