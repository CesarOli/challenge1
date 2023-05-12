const caixaEntrada = document.querySelector(".caixa_entrada_de_texto");
const caixaSaida = document.querySelector(".caixa_saida_de_texto");

function botaoCriptografar() {
	const mensagemEncriptada = criptografar(caixaEntrada.value);
	caixaSaida.value = mensagemEncriptada;
	caixaEntrada.value = " ";
}

function criptografar(textoEncriptado) {

	let encriptarCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
	textoEncriptado = textoEncriptado.toLowerCase();

	for(let i = 0; i < encriptarCodigo.length; i++) {
		if(textoEncriptado.includes(encriptarCodigo[i][0])) {
			textoEncriptado = textoEncriptado.replaceAll(encriptarCodigo[i][0], encriptarCodigo[i][1]);
		}
	}
	return textoEncriptado;
}
function botaoDescriptografar() {
	const mensagemDescriptada = descriptografar(caixaEntrada.value);
	caixaSaida.value = mensagemDescriptada;
	caixaEntrada.value = " ";
}
function descriptografar(textoDescriptado) {
	let desencriptarCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
	textoDescriptado = textoDescriptado.toLowerCase();

	for(let i = 0; i < desencriptarCodigo.length; i++) {
		if(textoDescriptado.includes(desencriptarCodigo[i][1])) {
			textoDescriptado = textoDescriptado.replaceAll(desencriptarCodigo[i][1], desencriptarCodigo[i][0]);
		}
	}
	return textoDescriptado;
}
function copiarMensagem() {
	const mensagemCopiada = document.getElementById("caixaSaida");
	caixaSaida.select();
	document.execCommand("copy");
	alert("Mensagem Copiada com Sucesso!!");
	caixaSaida.value = " ";
}
function removerAcentos() {
  const textoEncriptado = document.getElementById("textoEncriptado");
  const textoSemAcentos = textoEncriptado.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  textoEncriptado.value = textoSemAcentos;
}
function permitirApenasLetrasENumeros(event) {
  const textoEncriptado = document.getElementById("textoEncriptado");
  const tecla = event.keyCode || event.which;
  const teclaPermitida = (tecla >= 48 && tecla <= 57) || (tecla >= 97 && tecla <= 122) || (tecla === 8) || (tecla === 32) || (tecla === 13);
  if (!teclaPermitida) {
    event.preventDefault();
    return false;
  }
  return true;
}