document.getElementById("tag").addEventListener("submit", function (e) {
    const output = document.querySelector('.output');
    const output2 = document.createElement('div');
    const ul = document.createElement('ul');
    output.append(output2);
    output.append(ul); 
    
    
    var num = document.getElementById("userInput").value;
    var query = "https://free-to-play-games-database.p.rapidapi.com/api/game?id=" + num;
  
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });
    
    xhr.open("GET", query);
    xhr.setRequestHeader("X-RapidAPI-Key", "a881374ca7mshde7a19e80e86fdfp1b7ec7jsnb2cce2eff87d");
    xhr.setRequestHeader("X-RapidAPI-Host", "free-to-play-games-database.p.rapidapi.com");
    
  
    xhr.onload = ()=> {
      //load data in
      
      fetch(query).then(rep=>rep.json()).then((data)=>{
        ul.textContent= "";
        console.log(data)
        const a = [];
        a.push(data);
        addToPage(a);
        descToPage2(a);
        
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
        
      });
    }
    function descToPage2(arr2){
      arr2.forEach(element => {
        console.log(element.description);
        const li = document.createElement('li');
        li.textContent=""
        li.textContent = element.description;
        if(element.status){
          li.classList.add('dev_active');
        }else{
          li.classList.add('dev_inactive');
  
        }
        ul.append(li);
        li.addEventListener('click', (e)=>{
  
          li.classList.toggle('dev_active');
          li.classList.toggle('dev_inactive');
        })
      });
    }
  
    xhr.send();
    
    e.preventDefault()
  })