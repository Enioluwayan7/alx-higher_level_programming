<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>List Star Wars Movies</title>
</head>
<body>

    <ul id="list_movies">Loading movies...</ul>

    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    
    <!-- Custom Script -->
    <script>
        $(document).ready(function() {
            $.ajax({
                url: 'https://swapi-api.alx-tools.com/api/films/?format=json',
                method: 'GET',
                success: function(data) {
                    var movieList = $("#list_movies");
                    movieList.empty(); // Clear the list before adding new items

                    data.results.forEach(function(film) {
                        movieList.append("<li>" + film.title + "</li>");
                    });
                },
                error: function() {
                    $("#list_movies").append("<li>Failed to load movies.</li>");
                }
            });
        });
    </script>

</body>
</html>
