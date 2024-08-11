<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage List Items</title>
    <!-- Include jQuery from a CDN -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Custom Script -->
    <script>
        $(document).ready(function() {
            // Add new <li> element
            $("#add_item").click(function() {
                $("ul.my_list").append("<li>Item</li>");
            });

            // Remove the last <li> element
            $("#remove_item").click(function() {
                $("ul.my_list li").last().remove();
            });

            // Clear all <li> elements
            $("#clear_list").click(function() {
                $("ul.my_list").empty();
            });
        });
    </script>
</head>
<body>

    <ul class="my_list">
        <li>Existing Item 1</li>
        <li>Existing Item 2</li>
    </ul>
    <div id="add_item">Add Item</div>
    <div id="remove_item">Remove Last Item</div>
    <div id="clear_list">Clear List</div>

</body>
</html>
