var counter = 0;

document.getElementById('btn-next').addEventListener('click', changeImg);

Function changeImg(){
  counter++;
  document.getElementById('facecolor1.PNG').src = 'pic-' + counter + '.jpg';
    document.getElementById('facecolor2.PNG').alt = 'pic-' + counter + '.jpg';
}
