document.addEventListener('DOMContentLoaded', function () {
    
    const addMemberForm = document.getElementById('addMemberForm');

    if (addMemberForm) {
        document.getElementById('addMemberButton').addEventListener('click', async function (event) {
            event.preventDefault();

            const fullName = document.getElementById('memberName').value;
            const mobileNumber = document.getElementById('mobileNumber').value;
            const memberId = document.getElementById('memberId').value;

            console.log('Add Member:', fullName, mobileNumber, memberId);

            const data = {
                fullName: fullName,
                mobileNumber: mobileNumber,
                memberId: memberId,                
            }
            console.log('Add Member Data :', data);

            try{
                const res = await fetch(
                    'http://localhost:8000/registration',
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers:{
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }

                    }

                );
                const resData = await res.json();
                console.log('Json Add Member Data :', resData);

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