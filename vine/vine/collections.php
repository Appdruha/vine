<?php require 'head.php'
?>

<body>
    <div class="header" style="text-align: center;">
        <h1></h1>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="container" style="text-align: center;"></div>
    <br>
    <br>
    <button class="home" style="display: block; width: 200px; height: 100px; margin: auto; cursor: pointer; background: #323232; color: antiquewhite; font-size: large;">НАЗАД</button>
    <script>
        document.querySelector(".home").onclick = function() {
            window.location.href = "index.php"
        };
    </script>
    <script src="collections.js"></script>
</body>


</html>