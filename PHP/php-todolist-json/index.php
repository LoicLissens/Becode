<?php
include 'assets/php/content.php';

 ?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/bulma.min.css">
    <link rel="stylesheet" href="assets/css/style.min.css">
    <title>Todolist Json</title>
</head>
<body>
    <header>
        <?php include 'assets/php/navbar.php'; ?>
    </header>
    <!--MAIN DE LA PAGE  -->
    <main>
        <section class="container">
            <h1 class="is-size-1 title has-text-centered">Todolist</h1>
            <div class="container todolist">
                <div class="columns">
                    <div class="column has-text-centered"><button id ="todo-but" class="button is-danger is-outlined is-large">A faire</button></div>
                    <div class="column has-text-centered"><button id="archive-but" class="button is-warning is-outlined is-large">Archivé</button></div>
                </div>

                <div id="todo" class="container inner-todo todo">
                    <div class="columns is-centered"><div class=" column has-text-centered is-size-4 is-hal "> <?php echo count($array_todo).' '; ?> taches en cours : </div></div>
                    <form class="columns is-centered is-vcentered" id="archive-form">
                        
                        <div class="colmun">

                            <?php write($array_todo); ?>

                        </div>
                    </form>
                    <div id="doarchive" class="control columns is-centered is-5">
                            <button id="assync-archive"  type="submit" name="archive" class="button is-primary">Archiver !</button>
                        </div>
                </div>
                <!-- partie archivée en display none de base -->
                <div id="archive" class="container inner-todo todo">
                <div class="columns is-centered"><div class=" column has-text-centered is-size-4 is-half"> <?php echo count($array_archived).' '; ?> taches Archivées : </div></div>
                <?php write($array_archived); ?>
                
                </div>

             <!--PARTIE FORMULAIRE -->
                <form class="section" action="assets/php/contact.php" method="post">
                    <div class="columns is-centered">
                        <div class="field">
                            <div class="control">
                                <input class="input" type="text" name="data" placeholder="Entrer une tâche">
                            </div>
                        </div>
                        <div class="select">
                            <select name="importance">
                                <option value="true">Urgent</option>
                                <option value="false">Non urgent</option>
                            </select>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="control">
                             <button type="submit" name="send" class="button is-warning is-light is-primary">Envoyer</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
         </main>
         <!-- FOOTER DE LA PAGE -->
    <footer>
         <?php include 'assets/php/footer.php'; ?>
    </footer>
    <!-- JS -->
    <script src="assets/js/script.js"></script>
    <script src="assets/js/dragndrop.js"></script>
</body>
</html>