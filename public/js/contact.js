$(document).ready(function(){
    $('.submit').click(function(event) {
        console.log('Button Clicked');

        let name = $('#name').val();
        let email = $('#email').val();
        let subject = $('#subject').val();
        let message = $('#message').val();
        let status = $('.status');
        status.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            status.append('<div>Email is valid.</div>');
        } else {
            event.preventDefault();
            status.append('<div>Please enter a valid email address.</div>');
        }

        if(subject.length < 2) {
            event.preventDefault();
            status.append('<div>Subject must be more than 2 characters long.</div>');
        }

        if(message.length < 10) {
            event.preventDefault();
            status.append('<div>Message must be at least 10 characters long.</div>');
        }
    })
});