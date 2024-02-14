document.addEventListener('DOMContentLoaded', function () {

    const editMemberForm = document.getElementById('editMemberForm');

    if (editMemberForm) {
        document.getElementById('editMemberButton').addEventListener('click', async function (event) {
            event.preventDefault();

            const documentId = document.getElementById('memberDocId').value;
            const fullName = document.getElementById('fullMemberName').value;
            const mobileNumber = document.getElementById('memberMobileNumber').value;
            const memberId = document.getElementById('editMemberId').value;

            console.log('Edit Member:', documentId, memberId, fullName, mobileNumber);

            const data = {
                fullName: fullName,
                mobileNumber: mobileNumber,
                memberId: memberId,
            };

            console.log('Edit Member:', data);

            try {

                const response = await fetch(
                    `http://localhost:8000/editMember/${documentId}`,
                    {
                        method: 'PUT',
                        body: JSON.stringify(data),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    }
                );

                const responseData = await response.json();
                console.log('Json View Data:', responseData);

                const responseStatusCodeElement = document.getElementById("response-statuscode");
                responseStatusCodeElement.innerHTML = responseData.message;

                if (responseData.errorCode !== 200) {
                    responseStatusCodeElement.style.color = 'red';
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    }
})
