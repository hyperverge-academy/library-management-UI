document.addEventListener('DOMContentLoaded', function () {

    const viewMemberForm = document.getElementById('viewMemberForm');

        if (viewMemberForm) {
            document.getElementById("listMembersButton").addEventListener('click', async function (event) {
                event.preventDefault();

                // const memberId = document.getElementById('memberId').value;
                // console.log('View Member:', memberId);

                // const data = {
                //     memberId : memberId,
                // }
                // console.log('View Member Data:', data);

                try{
                    const res = await fetch(
                    'http://localhost:8000/getAllMembers' ,
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