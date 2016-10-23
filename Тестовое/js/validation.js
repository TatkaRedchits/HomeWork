$(function() {

  jQuery.validator.setDefaults({
    debug: true,
    success: 'valid'
  });

  $('#reg-form').validate({
    rules: {
      'reg-first-name': {
        required: true,
        minlength: 2
      },
      'reg-last-name': {
        required: true,
        minlength: 2
      },
      'reg-email': {
        required: true,
        email: true
      },
      'reg-password': {
        required: true,
        minlength: 6
      },
      'reg-confirm': {
        equalTo: '#reg-password'
      }
    }
  });

  $('#login-form').validate({
    rules: {
      'log-email': {
        required: true,
        email: true
      },
      'log-password': {
        required: true
      }
    }
  });

$('#profile-content-form').ready(function() {
  $('#profile-content-form').validate({
    rules: {
      'first-name': {
        required: true,
        minlength: 2
      },
      'last-name': {
        required: true,
        minlength: 2
      },
      'email': {
        required: true,
        email: true
      },
      'password': {
        minlength: 6
      }
    }
  })
})

});
