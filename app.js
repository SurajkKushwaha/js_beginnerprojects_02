function displaytime(){
    let hour = document.querySelector(".hour")
    let minute = document.querySelector(".minutes")
    let second = document.querySelector(".seconds")
    let time = document.querySelector(".time")
    



    
setInterval(()=>{
    let date = new Date()
    let hr = date.getHours()
    let mins= date.getMinutes()
    let sec= date.getSeconds()
    if(hr==0){
        hour.innerHTML=12
    }

    if(hr>12){
        time.innerHTML="PM"
    }
    else{
        time.innerHTML="AM" 
    }
//    console.log(sec);



hour.innerHTML = (hr<10?"0":"") + date.getHours();
minute.innerHTML= (mins<10?"0":"") +date.getMinutes();
second.innerHTML= (sec<10?"0":"") + date.getSeconds();
},1000)
}



displaytime()





