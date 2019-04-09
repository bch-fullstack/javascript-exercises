$(document).ready(function () {


    $('.addTask').click(function () {
        if ($.trim($('#inputField').val()) == '') {
            alert('Please enter a task');
        } else {
            var inputText = $('#inputField').val();
            $('.addedTasks .taskList').append('<li>' + inputText + '<button class="markAsDone btn btn-success">Done</button></li>');
            $('#inputField').val('');
        }
    });


});
$(document).on('click', '.markAsDone', function () {
    var inputText = this.parentNode.firstChild.nodeValue;
    $('.doneTasks .taskList').append('<li>' + inputText + '<button class="removeTask btn btn-danger">Remove task</button></li>');
    this.parentNode.remove();
});

$(document).on('click', '.removeTask', function () {
this.parentNode.remove();
});
