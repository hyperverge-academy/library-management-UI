document.addEventListener('DOMContentLoaded' , function() {
    const viewBookForm = document.getElementById('viewBookForm');

    if(viewBookForm){
        document.getElementById('listBookButton').addEventListener('click', async function(event) {
            event.preventDefault();

            try{
                const res = await fetch(
                'http://localhost:8000/displayAllBooks' ,
                {
                    method : 'GET',
                }
                );

                const resData = await res.json();
                console.log('Json View Data:', resData); 

                const responseStatusCode = document.getElementById("response-statuscode").innerHTML = resData.message;
                if (resData.errorCode !== 200) {
                    document.getElementById('response-statuscode').style.color = 'red';
                }

            }catch (err){
                console.log(err.message);
            }
        });
    }
});