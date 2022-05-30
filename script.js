


;(async () => {
    await getAllCats();
})();
async function getAllCats() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
        headers: {
            "x-api-key": "81ceca26-a414-4f91-bfbf-4ea66bdc7896"
        }
    });
    
const cats = await res.json();
console.log (cats)
return cats
}