<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/jquery-ui.css">
    <link rel="stylesheet" href="css/jquery-ui.structure.css">
    <link rel="stylesheet" href="css/jquery-ui.theme.css">
    <link href="assets/favicon.ico" rel="icon" type="image/x-icon"/>
    <script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
            crossorigin="anonymous"></script>
    <script src="js/jquery-ui.js" type="text/javascript"></script>
    <title>The site of Luhas</title>
</head>
<body>
<section class="showcase" style="padding: 0; position: absolute">
    <a id="btn" href="home.html"></a>
    <video id="homepage" autoplay muted playsinline></video>
</section>
<div class="centerScreen">
    <img src="assets/loading.gif" style="width: 50px">
</div>
</body>
<script src="js/main.js" type="text/javascript"></script>
<script>window.onload = setScreen();</script>
</html>