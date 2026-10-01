export async function getData(ligaAtiva,categoriaAtiva){
    const url = `http://localhost:3000/api/poe2/exchange?league=${ligaAtiva}&type=${categoriaAtiva}`

    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response Status:${response.status}`)
        }

        const result = await response.json();
        return result;
    }
    catch(error){
        console.error(error.message);
    }
}