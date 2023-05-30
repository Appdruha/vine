<?php require 'head.php'
?>

<body>
    <h1 style="text-align: center; color: brown;">Винная карта.</h1>
    <button class="home"
        style="display: block; width: 200px; height: 100px; margin: auto; cursor: pointer; background: #323232; color: antiquewhite; font-size: large;">НАЗАД</button>
    <script>
        document.querySelector(".home").onclick = function () {
            window.location.href = "index.php"
        };</script>
</body>

</html>