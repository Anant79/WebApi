
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    authenticate(username, password);
}
 
function authenticate(username, password) {
    $.ajax({
        type: 'POST',
        url: 'http://insightdemo.com/insight/v2/auth',
        data: {
            'username': username,
            'password': password,
            'group': 'users',
            'force': 'false',
        },
        success: function (data) {
            var key = data.childNodes[0].childNodes[5].childNodes[0].data;
            getDataUsingKey(key);
            debugger;
        },    
        error: function () {
            alert("Error: ");
        },
        complete: function() {
            alert('complete');
        },
    });
}

function getDataUsingKey(key) {
    $.ajax({
        type:"GET",
        url:'http://insightdemo.com/insightui/v2/uimodel',
        data:{
            'key': key,
        },
    
        success: function(data) {
        displayDataOnPage(data.pages);
        debugger;
        },   
    });
}

function displayDataOnPage(pages) {

var arr = pages;
    
for (var i = 0; i < arr.length; i++){
  document.write("<br><br>array index: " + i);
  debugger;
document.write("<br> - " + 'id' + ": " + arr[i].id);
}
}