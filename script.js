function counterment(n){
  if(n!=0){
    counter+=n;
    if(counter>0){
      document.getElementById('counter').style.color='green';
    }
    else if(counter<0){
      document.getElementById('counter').style.color='red';
    }
    else{
      document.getElementById('counter').style.color='black';
    }
    document.querySelector('#counter').innerHTML=`${counter}`;
    
}
  else{
    counter=0;
    document.getElementById('counter').style.color='black';
    document.querySelector('#counter').innerHTML=`${counter}`;    

  }
}
let counter=0;
