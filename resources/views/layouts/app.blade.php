<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Application</title>
    <!-- Compiled CSS -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <!-- Your content here -->
    {{$slot}}
    <!-- Compiled JS -->
    <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
