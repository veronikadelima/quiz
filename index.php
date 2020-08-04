<?php
require "config.php"
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    
    <title>One Page</title>
    
    <link rel="stylesheet" href="assets/css/style.css"/> 
    <link rel="stylesheet" href="assets/css/bootstrap.css"/>

    <script src="assets/js/jquery-3.5.1.min.js"></script>
    <script src="assets/js/bootstrap.bundle.js"></script>
       
</head>
<body>
<body>

    <header>
        <div class="navbar navbar-dark bg-dark">
            <div class="container d-flex justify-content-beetwen">
                <a href="" class="navbar-brand">
                    <strong>Quiz Game - Jogo de Perguntas</strong>
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
                    <button type="button" class="btn btn-light" data-toggle="modal" data-target="#staticBackdrop">
                        Clique para dar início ao jogo!
                    </button>
                </div>
                
                <!-- Modal -->
                <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Quiz Game - Jogo Perguntas</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form method="GET">
                                    <h6>1ª Pergunta - Em que lugar vivem mais cangurus do que pessoas?</h6>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioperg1"value="option1">
                                        <label class="form-check-label" for="exampleRadios1">
                                            a) Indonésia
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioperg1"value="option2">
                                        <label class="form-check-label" for="exampleRadios1">
                                            b) Nova Zelândia
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioperg1"value="option3">
                                        <label class="form-check-label" for="exampleRadios1">
                                            c) Austrália
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioperg1"value="option4">
                                        <label class="form-check-label" for="exampleRadios1">
                                            d) Papua-Nova Guiné
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="radioperg1"value="option5">
                                        <label class="form-check-label" for="exampleRadios1">
                                            e) África do Sul
                                        </label>
                                    </div>
                                </form>

                                <div class="total-pontos">
                                    <div>
                                        <h3>Você fez ...tantos... pontos!</h3>
                                    </div>
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-dismiss="modal">cancelar</button>
                                <button type="button" class="btn btn-secondary">Responder</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>   
   
</body>  
   
</body>
</html>