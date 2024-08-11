<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Display Hello Translation</title>
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Custom Script -->
    <script>
        $(document).ready(function() {
            $.ajax({
                url: 'https://hellosalut.stefanbohacek.dev/?lang=fr',
                method: 'GET',
                success: function(data) {
                    $("#hello").text(data.hello);
                },
                error: function() {
                    $("#hello").text("Failed to load translation.");
                }
            });
        });
    </script>
</head>
<body>

    <div id="hello">Loading...</div>

</body>
</html>
