<?php
require "config.php";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    
    <title>Quiz Game</title>
    
    <link rel="stylesheet" href="assets/css/style.css"/> 
    <link rel="stylesheet" href="assets/css/bootstrap.css"/>

    <script src="assets/js/jquery-3.5.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.js"></script>
       
</head>
<body>
    <header>
        <div class="navbar navbar-dark bg-dark">
            <div class="container d-flex justify-content-beetwen">
                <a href="" class="navbar-brand">
                    <strong>Quiz Game - Jogo das Perguntas</strong>
                </a>
                <a href="" class="text-white">Sobre</a>
            </div>
        </div>
    </header>

    <main>        
        <section>
            <div class="container">
                <!-- Button trigger modal -->
                <div class="area-button">
                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop" id="botao" onclick="iniciar()">
                        Clique para dar início ao jogo!
                    </button>
                </div>
                
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Quiz Game - Jogo das Perguntas</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">                                                                     
                                <form id="form" method="GET" action="recebedados.php">

                                    <h6 name="questao" id="questao"></h6>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio" value="option1" id="option1">
                                        <label class="form-check-label" for="option1" id="label-option1"></label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio" value="option2" id="option2">
                                        <label class="form-check-label" for="option2" id="label-option2"></label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio" value="option3" id="option3">
                                        <label class="form-check-label" for="option3" id="label-option3">

                                        </label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio" value="option4" id="option4">
                                        <label class="form-check-label" for="option4" id="label-option4"></label>
                                    </div>

                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radio" value="option5" id="option5">
                                        <label class="form-check-label" for="option5" id="label-option5"></label>
                                    </div>

                                </form>

                                <div class="total-pontos">
                                    <div>
                                        <h3 id="tot-pontos">Você fez ...tantos... pontos!</h3>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-dismiss="modal" id="Sair">Sair</button>
                                <button type="button" class="btn btn-light" id="responder" onclick="verificar()">Responder</button>
                                <button type="button" class="btn btn-light" id="resetar" onclick="resetar()">Reiniciar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>   
    <script src="script.js"></script>

    <script>
        
    </script>
</body>  
</html>