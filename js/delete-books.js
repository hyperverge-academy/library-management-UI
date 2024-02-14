document.addEventListener('DOMContentLoaded', function () {

    const deleteBookForm = document.getElementById('editBookForm');

    if (deleteBookForm) {
        document.getElementById("deleteBookButton").addEventListener("click", async function (event) {
            event.preventDefault();

            const bookId = document.getElementById('deleteBookId').value;
            console.log('Book ID:', bookId);

            try {
                const res = await fetch(
                    `http://localhost:8000/removeBooks/${bookId}`,
                    {
                        method: 'DELETE',
                        header: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'

                        },
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
})