<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Header Text</title>
</head>
<body>

    <header>Old Header</header>
    <div id="update_header">Click me to update the header</div>

    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <!-- Custom Script -->
    <script>
        $(document).ready(function() {
            $("#update_header").click(function() {
                $("header").text("New Header!!!");
            });
        });
    </script>

</body>
</html>
