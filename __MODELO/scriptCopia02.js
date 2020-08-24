var minhasQuestoes = [
    {
        questao: "Em que lugar vivem mais cangurus do que pessoas?",
        opcoes: {
            a: 'Indonésia',
            b: 'Nova Zelândia',
            c: 'Austrália',
            d: 'Papua-Nova Guiné',
            e: 'África do Sul'
        },
        resposta: 'c'
    },
    {
        questao: "Quantos olhos a maior parte das aranhas têm?",
        opcoes: {
            a: 'Dois',
            b: 'Quatro',
            c: 'Quatro pares',
            d: 'Seis',
            e: 'Um'
        },
        resposta: 'c'
    },
    {
        questao: "Qual das alternativas contém apenas nomes de rios?",
        opcoes: {
            a: 'São Francisco, Douro, Antártico',
            b: 'Nilo, Amazonas, Mississipi',
            c: 'Cáspio, Vermelho, Reno',
            d: 'Tocantins, Bering, Ganges',
            e: 'Danúbio, Jordão, Morto'
        },
        resposta: 'b'
    },
    {
        questao: "Quanto mede uma girafa?",
        opcoes: {
            a: 'Entre 4,8 e 5,5 metros',
            b: '2 metros',
            c: 'Entre 5 e 6 metros',
            d: '2,5 metros',
            e: '4 metros'
        },
        resposta: 'a'
    },
    {
        questao: "Qual das alternativas traz apenas nomes de grandes inventores?",
        opcoes: {
            a: 'Alfred Nobel, José Bonifácio, Leonardo da Vinci',
            b: 'Machado de Assis, Oscar Niemeyer e Dmitri Mendeleiev',
            c: 'Evangelista Torricelli, Thomas Edison, Pablo Picasso',
            d: 'Stephen Poplawski, Tarsila do Amaral, Amalie Auguste Melitta Bentz',
            e: 'Alexander Graham Bell, Bartolomeu de Gusmão, Galileu Galilei'
        },
        resposta: 'e'
    },
]

var pergunta = document.getElementById('questao');
var option1 = document.getElementById('radio1');
var option2 = document.getElementById('radio2');
var option3 = document.getElementById('radio3');
var option4 = document.getElementById('radio4');
var option5 = document.getElementById('radio5');


iniciar(minhasQuestoes, pergunta, option1, option2, option3, option4, option5);

function iniciar(questoes, pergunta, option1, option2, option3, option4, option5){
    var output = [];
    var answers;

    // para cada questão
    for(var i=0; i<questoes.length; i++){
        
        // mas, primeiro resetamos a lista de questões
        answers = [];

        // e aqui faremos para cada resposta na questão.
        for(letter in questoes[i].answers){

            // Aqui será escrito para html para usar o Radio.
            answers.push(
                '<label>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                //	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
                    + questoes[i].answers[letter]
                + '</label>'
            );
        }

        // adicione esta pergunta e suas respostas à saída
        output.push(
            '<div class="question">' + questoes[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // finalmente combinamos nossa lista de saída em uma string de html e colocamos na página
    quizContainer.innerHTML = output.join('');

}