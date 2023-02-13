function WriteCookie()
        {
              
            cookievalue = (document.sentMessage.customer.value) + ":";
            document.cookie = "name" + cookievalue;
            function Redirect()
            {
               const sendMessage = document.getElementById('sendMessageButton')
               alert("Thank you!! Your response has been recieved.");
            }
    
    
            
        }


       
