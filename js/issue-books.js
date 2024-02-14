document.addEventListener('DOMContentLoaded', function () {
    
    const issueBookForm = document.getElementById('issueBookForm');

    if (issueBookForm) {
        
        document.getElementById('issueBookButton').addEventListener('click', async function (event) {
            event.preventDefault();
            const bookId = document.getElementById('bookId').value;
            const memberId = document.getElementById('memberId').value;
            const issueId = document.getElementById('issueId').value;
            const duration = document.getElementById('duration').value;

            console.log('Issue Book:', bookId, memberId, issueId, duration);

            const data = {
                bookId: bookId,
                memberId: memberId,
                issueId: issueId,
                duration: duration,
            };

            console.log('Issue Book:', data);

            try {
                const response = await fetch(
                    `http://localhost:8000/issueBook/${bookId}/${memberId}`, 
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
