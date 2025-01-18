function getTempo() {
    
    const key = 'e176c824b5a44aeeb01202307251801';
    const cidade_estado = 'Fortaleza';
    const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${cidade_estado}`

    const resposta = axios.get(url, {
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    })
    resposta
    .then((dados) => {
        const current = dados.data.current;
        const temperatura = current.temp_c;
        console.log(`https://${current.condition.icon}`)
        document.querySelector('#temperatura').innerHTML = temperatura
        document.querySelector('#temperatura').innerHTML += `<img src="https:${current.condition.icon}" />`

    }).catch((error) => {
        console.error('Erro ao buscar dados:', error);
    })
}

getTempo();