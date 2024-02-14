document.addEventListener('DOMContentLoaded', function () {

    const editBookForm = document.getElementById('editBookForm');

    if (editBookForm) {
        document.getElementById('editBookButton').addEventListener('click', async function () {

            const docId = document.getElementById('bookDocId').value;
            const bookId = document.getElementById('bookId').value;
            const title = document.getElementById('bookTitle').value;
            const genre = document.getElementById('bookGenre').value;
            const price = document.getElementById('bookPrice').value;

            console.log('Edit Book:', docId, bookId, title, genre, price);

            const data = {
                bookId: bookId,
                title: title,
                genre: genre,
                price: price,
            };

            console.log('Edit Book:', data);
            
            console.log('URL:', `http://localhost:8000/editBookDetails/${docId}`);
            console.log('Data:', JSON.stringify(data));

            try {

                const response = await fetch(
                    `http://localhost:8000/editBookDetails/${docId}`,  
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
});