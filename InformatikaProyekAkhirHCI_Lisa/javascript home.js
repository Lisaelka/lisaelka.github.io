  // Function to validate and post the message
    function postMessage(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input element
        var input = document.getElementById('postInput');
        // Get the value of the input
        var post = input.value.trim(); // Trim to remove leading and trailing whitespace

        // Check if the post is empty or less than 10 characters
        if (post === '' || post.length < 10) {
            alert("Error: Post must be at least 10 characters long.");
            return;
        }

        // If the post is valid, proceed with posting
        console.log("Post successful:", post);
        // Code to actually post the content goes here

        // Clear the input field after posting
        input.value = '';
    }
</script>

