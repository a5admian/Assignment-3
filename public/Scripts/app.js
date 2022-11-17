(function(){
    function Start()
    {
        console.log("App Started");
        /*adding a second step for danger buttons*/
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/fitness');
                }   
                });
        }
    }
    window.addEventListener("load", Start);
}());