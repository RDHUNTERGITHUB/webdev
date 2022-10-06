
function clearField(){
    document.getElementById("myInput").value = "";
}
function refreshList_1(){
    document.getElementById('list').innerHTML = "<li>" + "Camping" + "</li>"+ "<li>" + "beach" + "</li>"; 
}
function emptyList(){ //empty list
    document.getElementById('list').innerHTML = "";
}

function refreshList_2(){
    document.getElementById('list').innerHTML = "<li>" + "Roller Coaster" + "</li>"+ "<li>" + "Arcade" + "</li>";
}
function sleepScene1(callback){
    setTimeout(function(){
    document.getElementById('output').textContent = "Looks like you're tired. Let's go into the hotel";
    document.getElementById('picture').innerHTML = '<img src=' +'"https://dh-prod-cdn.azureedge.net/-/media/property/jdv/park-south-hotel/parksouthhotel_reg28941-x-1600/parksouthhotel_reg28941-x-1600-x-760/parksouthhotel_reg28941w1600x760.jpg?ts=a13b22f8-4ae6-4a93-8bc0-5523af86464e"' + '/>'
    callback();
    },3000);
}   
function sleepScene2(callback){
    setTimeout(function(){
    document.getElementById('output').textContent = "Hi Sir/Madam we got your room ready!! ";
    document.getElementById('picture').innerHTML = '<img src=' + "https://qtxasset.com/quartz/qcloud1/media/image/2016-05/hotel-staff.jpg?VersionId=Vzk8oKyP3_euUBt83rNM.ixVNZSjc5NA" +'/>'
    callback();
    },3000);
}
function sleepScene3(callback){
    setTimeout(function(){
    document.getElementById('output').textContent = "Sleep tight! ";
    document.getElementById('picture').innerHTML = '<img src=' + "https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/09/sleep-sleeping-bed-1296x728-header.jpg?h=1528" +'/>'
    callback();
    },3000);
}
function runSleepScene(callback){     // Function to run the scenes
    sleepScene1(function(){
        sleepScene2(function(){
            sleepScene3(callback)
        });
    });
}

//-----------------------------// Different Scene
function foodScene1(callback){
    setTimeout(function(){
    document.getElementById('output').textContent = "Welcome, to  the Food Court! Waiter will be here shortly.";
    document.getElementById('picture').innerHTML = '<img src=' +'"https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2018/11/10104219/urbanspace.jpg"' + '/>'
    callback();
    },3000);
}   
function foodScene2(callback){
    setTimeout(function(){
    document.getElementById('output').textContent = "Hi Sir/Madam, I will have your food ready! ";
    document.getElementById('picture').innerHTML = '<img src=' + "https://t3.ftcdn.net/jpg/02/32/62/58/360_F_232625874_0Lq3FImjLVayGnux8KxSYnYSiCePdiiT.jpg" +'/>' // waiter
    callback();
    },3000);
}
function foodScene3(callback){
    setTimeout(function(){
    document.getElementById('output').textContent = "Enjoy your meal. ";
    document.getElementById('picture').innerHTML = '<img src=' + "https://images.squarespace-cdn.com/content/v1/53b839afe4b07ea978436183/1608506169128-S6KYNEV61LEP5MS1UIH4/traditional-food-around-the-world-Travlinmad.jpg" +'/>'
    callback();
    },3000);
}
function runFoodScene(callback){     // Function to run the scenes
    foodScene1(function(){
        foodScene2(function(){
            foodScene3(callback)
        });
    });
}
function getInputValue(){
  
    let inputVal = document.getElementById('myInput').value;
    let number = inputVal;

    if (number == 1 ) {
        // camping or beach
        document.getElementById('output').textContent = "Hi, Welcome! Which outdoor activity will you like to do?";
        document.getElementById('picture').innerHTML = '<img src=' +'"https://koa.com/blog/images/Top-Reasons-to-Work-Kamp.jpg?preset=blogPhoto"' + '/>'+ 
        "<br />" + "(You can always press 4 or 5 to use the restroom or hotel)" 
        refreshList_1();
        document.getElementsByName('userInput')[0].placeholder='Enter "one" or "two" for the following option';
     if(number == 'one' || number == "One"){
            document.getElementById('output').textContent = "Enjoy Your Camp!";
            document.getElementById('picture').innerHTML = '<img src=' +'"https://cdn.pixabay.com/photo/2018/12/24/22/21/camping-3893598_960_720.jpg"' + '/>'+ 
            "<br />" + "(You can always press 4 or 5 to use the restroom or hotel)" 
        }
     if(number == 'two' || number == 'Two'){
        document.getElementById('output').textContent = "Enjoy Your Beach!";
        document.getElementById('picture').innerHTML = '<img src=' +'"https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg"' + '/>'+ 
        "<br />" + "(You can always press 4 or 5 to use the restroom or hotel)" 
    }   

            }
    else if(number == 2 ) {
        //six flag
        document.getElementById('output').textContent = "Welcome to Six Flags! Where will you like to go?";  
        document.getElementById('picture').innerHTML = '<img src=' +'"https://www.sixflags.com/wp-content/uploads/smiling_employees-1.jpg"' + '/>';
        refreshList_2();
            }
    else if(number == 3 ) {
        // food court (Same thing as hotel)
        runFoodScene(function(){console.log('finished')});
            }
    else if(number == 4){
        // restroom (done)
        document.getElementById('output').textContent = "You can go back to play by typing 1,2, or 3. 5 if you want to take a rest";
        document.getElementById('picture').innerHTML = '<img src=' +'"https://www.thespruce.com/thmb/qkmtQZFjNVUysd60GF49V7hag0A=/2048x1152/smart/filters:no_upscale()/fancy-bathroom-ideas-4325947-hero-4777bf14fe2b447b86a21e8a64194c29.jpg"' + '/>'

    }
    else if(number == 5){
        //hotel (done)
        runSleepScene(function(){console.log('finished')});
    }
}

