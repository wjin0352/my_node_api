$.ajax('/users')
  .then(function(users) {
    for(var user in users) {
      $('ul').append('<li>' + users[user].name + '</li>');
    }
  }).fail(function(error) {
    console.log(error);
  });

