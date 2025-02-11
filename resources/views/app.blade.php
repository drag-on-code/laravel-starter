<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.ico">
    <title>{{ $appName }}</title>
    @vite(['resources/scss/app.scss'])
</head>

<body>
    <div id="app"></div>
    @vite(['resources/js/app.js'])
</body>

</html>
