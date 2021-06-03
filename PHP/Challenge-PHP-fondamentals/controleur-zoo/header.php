<?php
    $nav_array = ['<a class="navbar-item">
    Home
  </a>', '<a class="navbar-item">
  Controleur du zoooooo
 </a>
'];
?>
<nav class="navbar" role="navigation" aria-label="main navigation">
 

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
        <?php
            foreach ($nav_array as $key => $value) {
                echo $value;
            }
        ?>
    </div>
</div>

    
</nav>