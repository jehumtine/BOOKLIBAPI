There are two folders in this Repository booklibreact and booklib.
booklibreact has the frontend which was made using react and booklib has the api which was made using the Django Rest Framework. In order to run this project first navigate to the booklib folder and  run pip install -r requirements.txt . This will install all the necessary libraries for the project. In the project directory  run python manage.py makemigrations and then python manage.py migrate to create the database schema based on the models.
Finally, you can start the development server using python manage.py runserver to run the Django application locally. After that we have our backend runnning navigate back to the booklibreact folder where the frontend is located. Navigate to the project directory in the terminal and run `npm install` or `yarn install` (depending on your project setup) to install all the required dependencies.
Then start the Frontend using `npm start` or `yarn start`.
The Django Rest Framework Backend has the folllowing features:
Data model: Represents a book with title, author, and ISBN.
Endpoints
    GET /books: Fetch all books.
    POST /books: Add a new book.
    PUT /books/:id: Update an existing book.
    DELETE /books/:id: Delete a book.

While the React frontend has the following features:
Frontend:
    Display all books fetched from the API.
    Form to add new books (title and author fields).
    Actions to edit and delete existing books.


