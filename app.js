const getpokimon=async()=>{
    try{
        const name=document.getElementById('searchName').value.toLowerCase();
        const data=await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        if(!data.ok){
            throw new Error("No pokimon found");

        }

        const pokidata=await data.json();
        const pokiImg=pokidata.sprites.front_default;

        const displayPoki=document.getElementById('pokimonImg');

        displayPoki.src=pokiImg;
        displayPoki.style.display='block';

    }
    catch(err){
        console.log(err);

    }
}