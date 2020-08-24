let [pergunta0, pergunta1, pergunta2, pergunta3, pergunta4] = perguntaJson;
let question;
let check;
let resp;
let opcao;
let n = 0;
let ponto = 0;

function resetar(){
    n = 0;
    ponto = 0;
    $('.option').css('background-color', '#EEE'); 
    $('.option-check').empty();
    $('.option').css('display', 'inline-flex');
    $('.total-pontos').css('display', 'none');
    $('#btnResetar').css('display', 'none');                
    $('.modal-title').empty();
    $('.tot-pontos').empty();
    $('.option').css('display', 'inline-flex');
    $('.modal-title').text(pergunta0.questao);
    $('#option1 p').text(pergunta0.option1);
    $('#option2 p').text(pergunta0.option2);
    $('#option3 p').text(pergunta0.option3);
    $('#option4 p').text(pergunta0.option4);
    $('#option5 p').text(pergunta0.option5);
}

$('#staticBackdrop').on('hidden.bs.modal', function () {
    n = 0;
    ponto = 0;
    $('.option').css('background-color', '#EEE'); 
    $('.option-check').empty();
    $('.option').css('display', 'inline-flex');
    $('.total-pontos').css('display', 'none');
    $('#btnResetar').css('display', 'none');                
    $('.modal-title').empty();
    $('.tot-pontos').empty();
    $('.option').css('display', 'inline-flex');
    $('.modal-title').text(pergunta0.questao);
    $('#option1 p').text(pergunta0.option1);
    $('#option2 p').text(pergunta0.option2);
    $('#option3 p').text(pergunta0.option3);
    $('#option4 p').text(pergunta0.option4);
    $('#option5 p').text(pergunta0.option5);
})

$('.option').css('display', 'inline-flex');
$('.modal-title').text(pergunta0.questao);
$('#option1 p').text(pergunta0.option1);
$('#option2 p').text(pergunta0.option2);
$('#option3 p').text(pergunta0.option3);
$('#option4 p').text(pergunta0.option4);
$('#option5 p').text(pergunta0.option5);

$('.option').click(function(){
    $('.option').css('background-color', '#EEE'); //volta o padrão
    $(this).css('background-color', '#76d386');
    opcao = '';
    check = '';
    opcao = $(this).attr('id');
    check = `${opcao}-check`;
    $('.option-check').empty();
    $(`#${check}`).append('X');
    question = $('.modal-title').text();

    if(n < 5) {    
        if(question === pergunta0.questao){
            resp = pergunta0.respCerta;
            if(opcao === resp){
                ponto++;
                n++;
            } else {
                n++
            }
            window.setTimeout(function() {
                $('.option').css('background-color', '#EEE'); 
                $('.option-check').empty();
                $('.modal-title').text(pergunta1.questao);
                $('#option1 p').text(pergunta1.option1);
                $('#option2 p').text(pergunta1.option2);
                $('#option3 p').text(pergunta1.option3);
                $('#option4 p').text(pergunta1.option4);
                $('#option5 p').text(pergunta1.option5); 
            }, 500);          
        }

        if(question === pergunta1.questao){
            resp = pergunta1.respCerta;
            if(opcao === resp){
                ponto++;
                n++;
            } else {
                n++
            }
            window.setTimeout(function() {
                $('.option').css('background-color', '#EEE'); 
                $('.option-check').empty();
                $('.modal-title').text(pergunta2.questao);
                $('#option1 p').text(pergunta2.option1);
                $('#option2 p').text(pergunta2.option2);
                $('#option3 p').text(pergunta2.option3);
                $('#option4 p').text(pergunta2.option4);
                $('#option5 p').text(pergunta2.option5);
            }, 500);            
        }

        if(question === pergunta2.questao){
            resp = pergunta2.respCerta;
            if(opcao === resp){
                ponto++;
                n++;
            } else {
                n++
            }
            window.setTimeout(function() {
                $('.option').css('background-color', '#EEE'); 
                $('.option-check').empty();
                $('.modal-title').text(pergunta3.questao);
                $('#option1 p').text(pergunta3.option1);
                $('#option2 p').text(pergunta3.option2);
                $('#option3 p').text(pergunta3.option3);
                $('#option4 p').text(pergunta3.option4);
                $('#option5 p').text(pergunta3.option5);                
            }, 500);
        }

        if(question === pergunta3.questao){
            resp = pergunta3.respCerta;
            if(opcao === resp){
                ponto++;
                n++;
            } else {
                n++;
            }
            window.setTimeout(function() {
                $('.option').css('background-color', '#EEE'); 
                $('.option-check').empty();
                $('.modal-title').text(pergunta4.questao);
                $('#option1 p').text(pergunta4.option1);
                $('#option2 p').text(pergunta4.option2);
                $('#option3 p').text(pergunta4.option3);
                $('#option4 p').text(pergunta4.option4);
                $('#option5 p').text(pergunta4.option5);
            }, 500); 
        }

        if(question === pergunta4.questao){
            resp = pergunta4.respCerta;
            if(opcao === resp){
                ponto++;
                n++;
            } else {
                n++
            }
            $('.option p').empty();
            $('.option').css('display', 'none');
            $('.total-pontos').css('display', 'flex');                
            $('#btnResetar').css('display', 'block');                
            $('.modal-title').text('Fim de Jogo!');
            $('.tot-pontos').html(`Você fez ${ponto} pontos!`);
        }
    }    
});





