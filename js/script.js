function mostrar() {
	cep = document.getElementById("cep").value // pegando valor do cep
	// url = "https://viacep.com.br/ws/"+cep+"/json/" // url do viacep
	url = `https://viacep.com.br/ws/${cep}/json/` // url do viacep

	// BUSCANDO O CEP USANDO FETCH
	fetch(url)
		.then((res) => { // variavel "res" irá armazenar a resposta inicial
			return res.json() // convertendo a resposta em JSON
		})
		.then((cep) => { // variavel "cep" contendo o json com o CEP do viacep
			console.log("Oi, meu CEP É no fetch", cep) // imprimindo os dados do cep
			document.getElementById("cidade").value = cep.localidade
			document.getElementById("bairro").value = cep.bairro
			document.getElementById("ddd").value = cep.ddd
			document.getElementById("estado").value = cep.uf
			M.updateTextFields()
		})
	// FIM DA IMPLEMENTAÇÃO DO FETCH
	console.log("Oi, meu CEP É fora", cep)
}
function mostrarRua() {
	uf = $("#uf-rua").val()
	cidade = $("#cidade-rua").val()
	rua = $("#rua").val()
	url = `https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/` // url do viacep

	fetch(url)
		.then((res) => { // variavel "res" irá armazenar a resposta inicial
			return res.json() // convertendo a resposta em JSON
		})
		.then((ruas) => { // variavel "cep" contendo o json com o CEP do viacep
			console.log("aqui as ruas", ruas)

			let listaRuas = ""

			for (let rua of ruas) {
				dadosRua = ""
				const {ddd, ibge, regiao, siafi, ...ruaNova} = rua
				for (let prop in rua) {
					dadosRua = dadosRua + `<h6>${rua[prop]}</h6>`
				}
				listaRuas = listaRuas + `<li class="collection-item avatar"> ${dadosRua}</li>`
			}

			document.querySelector("#lista-ruas").innerHTML = listaRuas
		})


	console.log("aqui a url montada", url)

}
// tag fechamento do script JS