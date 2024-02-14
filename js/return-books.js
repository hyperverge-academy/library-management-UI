document.addEventListener('DOMContentLoaded', function () {

    const returnBookForm = document.getElementById('returnBookForm');

    if (returnBookForm) {

        document.getElementById('returnBookButton').addEventListener('click', async function (event) {
            event.preventDefault();

            const issuedId = document.getElementById('issuedId').value;

            console.log('Return Book:', issueId);

            const data = {
                issuedId: issuedId,
            };

            console.log('return Book Data :', data);

            try {
                const response = await fetch(
                    `http://localhost:8000/returnBook/${issuedId}`,
                    {
                        method: 'POST',
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
});
