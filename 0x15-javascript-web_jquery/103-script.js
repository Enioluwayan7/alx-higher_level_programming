<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Translate Hello</title>
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Custom Script -->
    <script>
        $(document).ready(function() {
            function fetchTranslation() {
                var languageCode = $("#language_code").val();
                
                if (languageCode) {
                    $.ajax({
                        url: 'https://www.fourtonfish.com/hellosalut/hello/',
                        method: 'GET',
                        data: { lang: languageCode },
                        success: function(data) {
                            $("#hello").text(data.hello);
                        },
                        error: function() {
                            $("#hello").text("Failed to fetch translation.");
                        }
                    });
                } else {
                    $("#hello").text("Please enter a language code.");
                }
            }

            // Fetch translation on button click
            $("#btn_translate").click(fetchTranslation);

            // Fetch translation on Enter key press
            $("#language_code").keypress(function(event) {
                if (event.which === 13) { // Enter key code
                    event.preventDefault(); // Prevent form submission if inside a form
                    fetchTranslation();
                }
            });
        });
    </script>
</head>
<body>

    <input type="text" id="language_code" placeholder="Enter language code (e.g., es, fr, en)">
    <input type="button" id="btn_translate" value="Translate">
    <div id="hello">Translation will appear here...</div>

</body>
</html>
