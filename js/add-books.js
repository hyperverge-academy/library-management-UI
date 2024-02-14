document.addEventListener('DOMContentLoaded', function () {
    const addBookForm = document.getElementById('addBookForm'); 

    if (addBookForm) {
        document.getElementById('addBookButton').addEventListener('click', async function (event) {
            event.preventDefault();

            const bookId = document.getElementById('bookId').value;
            const status = document.getElementById('bookStatus').value;
            const title = document.getElementById('bookTitle').value;
            const author = document.getElementById('bookAuthor').value;
            const genre = document.getElementById('bookGenre').value;
            const price = document.getElementById('bookPrice').value;

            console.log('Add Books:', bookId, status, title, author, genre, price);

            const data = {
                bookId: bookId,
                status: status,
                title: title,
                author: author,
                genre: genre,
                price: price
            };

            console.log('Add Book Data:', data);

            try {
                const res = await fetch(
                    'http://localhost:8000/addBooks',
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        }
                    }
                );

                const resData = await res.json();
                console.log('Json Add Book Data:', resData);

                const responseStatusCode = document.getElementById("response-statuscode").innerHTML = resData.message;
                if (resData.errorCode !== 200) {
                    document.getElementById('response-statuscode').style.color = 'red';
                }

            } catch (err) {
                console.log(err.message);
            }
        });
    }
});
 