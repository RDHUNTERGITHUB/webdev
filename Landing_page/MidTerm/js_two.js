const output = document.querySelector(".output");
const ul = document.createElement('ul');
output.append(ul); 
const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical");
xhr.setRequestHeader("X-RapidAPI-Key", "a881374ca7mshde7a19e80e86fdfp1b7ec7jsnb2cce2eff87d");
xhr.setRequestHeader("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
xhr.onload = ()=> {
  //load data in
  
  fetch("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by=alphabetical").then(rep=>rep.json()).then((data)=>{

    console.log(data);
    
    addToPage(data);
    
  })
}

function addToPage(arr){
  arr.forEach(element => {
    console.log(element.title);
    const li = document.createElement('li');
    li.textContent=""
    li.textContent = element.title;
    if(element.status){
      li.classList.add('active');
    }else{
      li.classList.add('inactive');

    }
    ul.append(li);
    li.addEventListener('click', (e)=>{

      li.classList.toggle('active');
      li.classList.toggle('inactive');
    })
    })
  }
xhr.send(data);