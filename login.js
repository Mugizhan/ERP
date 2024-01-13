let users=[

    {username:'23mca052', password:'praveen'},
    {username:'23mca041', password:'abenesh'},
    {username:'23mca053', password:'salman'},
    {username:'23mca055', password:'saravana'},
    {username:'23mca059', password:'vengatesh'},

];

function validate(e){
    let flag=0;
    e.preventDefault();
    let user = document.getElementById('username').value;
    let pass = document.getElementById("password").value;
    for(let i=0;i<user.length;i++)
    { 
        if(user === users[i].username && pass=== users[i].password)
        {
            // <a href="internal.html" className="href"></a>
            flag=1;
            alert("valid user");
            window.location.href="home.html";
            break;
        }
        
    }
    if(flag==0){
    alert("Invalid username and password");
    }
}