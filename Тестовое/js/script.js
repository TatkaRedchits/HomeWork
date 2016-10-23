var users = [];

function getAllUsers() {
    var result = JSON.parse(localStorage.getItem('users'));
    if(!result) {
        result = [];
    }
    return result;
}

function saveUser(user) {
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function updateUser(user) {
    for (var i = 0; i < users.length; i++) {
        if(users[i].id == user.id) {
            if(!user.password || user.password == users[i].password) {
                user.password = users[i].password;
            } else {
                user.password = md5(user.password);
            }
            users[i] = user;
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
}

function saveUserSession(id) {
    document.cookie = 'sessionId =' + id;
}

function getUserSessionId() {
    return document.cookie.replace(/(?:(?:^|.*;\s*)sessionId\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

function deleteUserSessionId(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

function getUserByEmail(email) {
    users = getAllUsers();

    if (users) {
        for (var i = 0; i < users.length; i++ ) {
            if(users[i].email == email) {
                return users[i];
            }
        }
    }
    return null;
}

function getUserBySessionId(sessionId) {
    users = getAllUsers();

    for (var i = 0; i < users.length; i++) {
        if(users[i].sessionId == sessionId) {
            return users[i];
        }
    }
    return null;
}

function getUserData() {
    var firstName = $('#reg-first-name').val();
    var lastName = $('#reg-last-name').val();
    var email = $('#reg-email').val();
    var password = $('#reg-password').val();

    var userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: md5(password)
    };
    return userData;
}

function genereteId() {
    return Math.random().toString(36).substr(2);
}

function renderProfile(user) {
    var tmpl = _.template($('#user-profile').html());

    var content = tmpl({data: user, countries: countries});
    $('.profile').html(content);

    $('#user-name').html(user.firstName + ' ' + user.lastName);
}

function goToUserProfile(user) {
    renderProfile(user);

    $('.reg-form').css('display', 'none');
    $('.profile').css('display', 'block');
    $('.login-form').css('display', 'none');
    $('#logout').css('display', 'inline-flex');
}

function leaveUserProfile() {
    $('.reg-form').css('display', 'flex');
    $('.profile').css('display', 'none');
    $('.login-form').css('display', 'inline-flex');
    $('#logout').css('display', 'none');
}

function registerNewUser() {
    if (!($('#reg-form').valid())) {
        return;
    }

    $('#reg-error').css('display', 'none');

    var newUser = getUserData();

    var userId = genereteId();
    newUser.userId = userId;

    var sessionId = genereteId();
    newUser.sessionId = sessionId;

    if (localStorage.getItem('users')) {
        if (getUserByEmail(newUser.email) == null) {
            saveUser(newUser);
            saveUserSession(sessionId);
            goToUserProfile(newUser);

        } else {
            $('#reg-error').css('display', 'inline');
        }
    } else {
        saveUser(newUser);
        saveUserSession(sessionId);
        goToUserProfile(newUser);
    }
}

function loginUser() {
    if (!($('#login-form').valid())) {
        return;
    }

    $('#login-password-error').css('display', 'none');
    $('#login-email-error').css('display', 'none');

    var email = $('#log-email').val();
    var password = $('#log-password').val();    

    var user = getUserByEmail(email);

    if (user) {

        if (user.password == md5(password)){
            var sessionId = genereteId();
            user.sessionId = sessionId;

            updateUser(user); 
            
            saveUserSession(sessionId);
            goToUserProfile(user);
        } else {
            $('#login-password-error').css('display', 'block');
        }

    } else {
        $('#login-email-error').css('display', 'block');
    }

    $('#log-email').val('');
    $('#log-password').val('');  
}

function editUserProfile() {
    $('#field-password').css('display', 'block');
    $('#edit-profile-btn').css('display', 'none');
    $('.field-data').css('display', 'none');
    $('.changed-field-data').css('display', 'inline-block');
    $('.save-profile-btn').css('display', 'inline-block');
    $('.cansel-profile-btn').css('display', 'inline-block');
}

function saveChanges() {
    if (!($('#profile-content-form').valid())) {
        return;
    }
    var currentUserSessionId = getUserSessionId();

    var firstName = $('#first-name').val();
    var lastName = $('#last-name').val();
    var email = $('#email').val();
    var country = $('#country option:selected').val();
    var userId = $('#userId').val();

    var password = $('#password').val();
   
    var changedUserData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        country: country,
        password: password,
        userId: userId,
        sessionId: currentUserSessionId
    };

    updateUser(changedUserData);
    closeChangeField();
    renderProfile(changedUserData); 
}

function closeChangeField() {
    $('.field label.error').css('display', 'none');
    $('#field-password').css('display', 'none');
    $('#edit-profile-btn').css('display', 'block');
    $('.field-data').css('display', 'inline-block');
    $('.changed-field-data').css('display', 'none');
    $('.save-profile-btn').css('display', 'none');
    $('.cansel-profile-btn').css('display', 'none');
}

function logout() {
    deleteUserSessionId('sessionId');
    leaveUserProfile();
}

$(function() {

    var currentUserSessionId = getUserSessionId();

    if (currentUserSessionId) {
        var currentUser = getUserBySessionId(currentUserSessionId);
        if (currentUser != null) {
            goToUserProfile(currentUser);
        }
    }

    $('#reg-form').on('submit', registerNewUser);    

    $('#login-form').on('submit', loginUser); 

    $('#logout-btn').on('click', logout);

    $('.profile').on('click', '#edit-profile-btn', editUserProfile);

    $('.profile').on('submit', '#profile-content-form', saveChanges); 

    $('.profile').on('click', '#cansel-btn', closeChangeField); 

}); 