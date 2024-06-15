const getPokemonData = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    try {
        resp = await fetch(url, { method: 'GET' })
        if (resp.ok) {
            const data = await resp.json();
            console.log(data)
        } else {
            console.log("fodeu")
        }
    } catch (e) {
        console.log(`Deu erro ${e}`)
    }
}

getPokemonData('ditto')