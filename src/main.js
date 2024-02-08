const para_en_hadith = document.getElementById("para_en");
const hadithName = document.getElementById("h_na");
const hadithNumber = document.getElementById("h_no");
const btnGet = document.querySelector("button");

const apiRequest = async (url) => {
    try {
        let result = await fetch(`https://random-hadith-generator.vercel.app/${url}`);
        return result.json();
    } catch (error) {
        console.error(error);
    };
};  


btnGet.addEventListener("click",(ev)=>{
    const cHide = document.querySelectorAll(".hide");
    cHide.forEach((i)=>{
        i.style.display = "inline";
    })
    let randomNum = Math.floor(Math.random()*5);
    if (randomNum===1){
        let bhukariGet = apiRequest("bhukari/");
        bhukariGet.then((res)=>{
            console.log(res);
        });
    }else if (randomNum===2){
        let muslimGet =  apiRequest("muslim/");
        muslimGet.then((res)=>{
            setUI(res.data.book,res.data.id,res.data.hadith_english);
        })
    }else if (randomNum===3){
        let dawudGet = apiRequest("abudawud/");
        dawudGet.then((res)=>{
            setUI(res.data.book,res.data.id,res.data.hadith_english);
    })
    }else if (randomNum===4){
        let ibnMajahGet = apiRequest("ibnmajah/");
        ibnMajahGet.then((res)=>{
            setUI(res.data.book,res.data.id,res.data.hadith_english);
        })
    }else if (randomNum===5){
        let tirmidhiGet = apiRequest("tirmidhi/");
        tirmidhiGet.then((res)=>{
            setUI(res.data.book,res.data.id,res.data.hadith_english);
        })
    }else{
        let aget = apiRequest("bhukari/");
        aget.then((res)=>{
            setUI(res.data.book,res.data.id,res.data.hadith_english);
        })
    }
}); 

const setUI = (name,no,en) => {
    hadithName.innerHTML = name;
    hadithNumber.innerHTML = no;
    para_en_hadith.innerHTML = en;
};