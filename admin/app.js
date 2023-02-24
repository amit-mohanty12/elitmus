let password = prompt("Please enter password");
if(password=="1234") {
    document.getElementById("container").style.display="block";
    document.getElementById("preloader").style.display="none";
}
else {
    alert("wrong password")
    window.location.reload();
}
    var html=""
    var name,email,redno,code,t;
  //  var name = firebase.database().ref('userdata/'+localStorage.getItem('emails'));
    var hjcordiref= firebase.database().ref("userinfo/");
    hjcordiref.on("child_added", function(data){
    
    var pathe= firebase.database().ref("userinfo/"+data.key)
        pathe.on("child_added",function(data){  
            
            var item=data.val();
            console.log(item);
            var innerpath=firebase.database().ref(innerpath+"/imgs");
            
            innerpath.on("child_added",function(data){
                console.log("22")
                var innermost=firebase.database().ref(innermost+data.key);
                innermost.on("child_added",function(){
                    console.log("24")
                    var innermostitem=data.val();
                
                     html+=` 
                    <td>
                        <ul>
                            <li>Name: ${item.name}</li>
                            <li>email: ${item.email}</li>
                            <li>Regd. No.: ${item.registration_number}</li>
                            <li>Invitation code: ${item.invitation_code}</li>
                            <li>Time of registration: ${item.name}</li>
                        </ul>
                    </td>
                <td>
                    <td>${innermostitem.imgurl}</td>
                    <td>${innermostitem.timestamp}</td>
                </td>`
                })
                
            });
            
        });
    });

    document.getElementById("participants").innerHTML += html;

       

