

let imageArray = [];
imageArray.push("https://storage.googleapis.com/simg-memechat/T79O8pHAPGzcct12vhxLDLSbLomOfF6918853.jpg")
imageArray.push("https://indianmemetemplates.com/wp-content/uploads/arey-padhai-karlo-thoda.jpg");
imageArray.push("https://media.makeameme.org/created/padhai-karle-thordi.jpg");
imageArray.push("https://www.scrolldroll.com/wp-content/uploads/2020/09/Abeyy-Padhai-likhai-karo-IASYAS-Bano-Mirzapur-Memes-750x430.png");
imageArray.push("https://pbs.twimg.com/media/FUJ9cZeVsAA8igN.jpg:large");
imageArray.push("https://storage.googleapis.com/simg-memechat/QfVJRWHAqPHULqb0jaJXbNmveBtewf4710371.jpg");
imageArray.push("https://media.makeameme.org/created/ja-bete-jake.jpg");
imageArray.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt2sAVJx0ZgnB0LGKDjqsSULWS6ZrccRoPIg&usqp=CAU");
imageArray.push("https://memeheist.com/wp-content/uploads/2023/03/Ye-Sab-Doglapan-Hai-Meme-Template-on-Shark-Tank-India.png");
imageArray.push("https://pbs.twimg.com/media/Eci9lImUwAAoldF.jpg:large");

function displayImage() {
  const randomIndex = Math.floor(Math.random() * imageArray.length);
  const randomImageUrl = imageArray[randomIndex];

  const imageElement = document.createElement('img');
  imageElement.src = randomImageUrl;
  imageElement.style.position = 'fixed';
  imageElement.style.top = '0';
  imageElement.style.left = '0';
  imageElement.style.width = '60%';
  imageElement.style.height = '70%';
  imageElement.style.marginLeft = '300px';
  imageElement.style.marginTop = "120px";
  imageElement.style.borderRadius = "10px";

  document.body.appendChild(imageElement);
  
}
displayImage();
