const text1 = "Hello! I'm Yvonne.",
      text2 = "I'm a designer & developer.";   
let index = 0;

(function type1(){   
    let letter = text1.slice(0,++index); 
    document.querySelector(".typing1").textContent = letter;
    if(letter.length < text1.length){
        setTimeout(type1,200);
    }else{
        clearTimeout(type1);
        document.querySelector(".typing1").classList.remove("typing1");
        let index = 0;
        (function type2(){   
            let letter = text2.slice(0,++index); 
            document.querySelector(".typing2").textContent = letter;
            if(letter.length < text2.length){
                setTimeout(type2,200);
            }else{
                clearTimeout(type2);
                document.querySelector(".typing2").classList.remove("typing2");
            }
        })();        
    }
})();
