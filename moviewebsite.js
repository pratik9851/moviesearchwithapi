async function moviedata(e){
    e.preventDefault();
    try{
    let movie_name=document.getElementById("name").value;
    
    let res= await fetch(`http://www.omdbapi.com/?apikey=a57d42a&t=${movie_name}`)
    var data=await res.json()
   // console.log(data.Poster);
    let div_name=document.getElementById("container-body");
    div_name.innerHTML=null;
  
    let div=document.createElement("div")
         
    let p_name=document.createElement("p")
        
    
    //console.log(p_name);
    let p_rating=document.createElement("p")
    
    let p_release=document.createElement("p");
    
    let p_img=document.createElement("img");
   

    if(data.Poster==undefined){
        p_img.src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif";
        div.append(p_img);
        div_name.append(div);

    }else{
    
    
    p_rating.innerText=data.Released;
    p_img.src=data.Poster;
    p_name.innerText=data.Title;
    if(Number(data.imdbRating)>8.5){
        p_release.append("recomended");
        p_release.append(" ")
        p_release.append(data.imdbRating)
       }else{
        p_release.innerText=data.imdbRating
    };
   
    div.append(p_img,p_name,p_release,p_rating);
    div_name.append(div);
}


    }
    catch(err){
        //console.log(err);
    }
    
   
    
    }
  //  moviedata();
