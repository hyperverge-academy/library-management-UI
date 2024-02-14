document.addEventListener('DOMContentLoaded', function () {

    const deleteMemberForm = document.getElementById('deleteMemberForm');

    if (deleteMemberForm) {
        document.getElementById("deleteMemberButton").addEventListener('click', async function (event) {
            event.preventDefault();

            const memberId = document.getElementById('deleteId').value;
            console.log('Member ID:', memberId);

            try {
                const res = await fetch(
                    `http://localhost:8000/deleteMember/${memberId}`,
                    {
                        method: 'DELETE',
    
                    }
                );

                const resData = await res.json();
                console.log('Json View Data:', resData);

                const responseStatusCodeElement = document.getElementById("response-statuscode");
                responseStatusCodeElement.innerHTML = resData.message;

                if (resData.errorCode !== 200) {
                    responseStatusCodeElement.style.color = 'red';
                }

                
            } catch (err) {
                console.log(err.message);
            }
        });
    }

});