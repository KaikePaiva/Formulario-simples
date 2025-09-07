function meuEscopo (){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = ["nome","sobrenome","email", "telefone", "peso","altura"];



    function recebeEventoForm (evento){
        evento.preventDefault();

       const nome = form.querySelector('.nome')
       const sobrenome = form.querySelector('.sobrenome')
       const email = form.querySelector('.email')
       const telefone = form.querySelector('.telefone')
       const peso = form.querySelector('.peso')
       const altura = form.querySelector('.altura')

       pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        telefone: telefone.value,
        peso: peso.value,
        altura: altura.value,
        

       })

       console.log(pessoas);
       resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} possui ${peso.value}kg e ${altura.value} metros de altura`;
       alert("O formulário foi enviado!");
    }

    form.addEventListener('submit', recebeEventoForm)

};
meuEscopo();
