Book Library Repository

This repository contains two folders: `booklibreact` and `booklib`.

- `booklibreact`: The frontend of the application, built using React.
- `booklib`: The backend of the application, built using Django Rest Framework.

## Getting Started

To run this project, follow these steps:

1. Navigate to the `booklib` folder and run:
pip install -r requirements.txt
This will install all the necessary libraries for the project.

2. In the project directory, run:
python manage.py makemigrations python manage.py migrate
This will create the database schema based on the models.

3. Start the development server using:
python manage.py runserver
This will run the Django application locally.

4. Navigate back to the `booklibreact` folder, where the frontend is located.

5. In the project directory, run:
npm install # or yarn install if you're using yarn
This will install all the required dependencies.

6. Start the Frontend using:
npm start # or yarn start if you're using yarn

## Django Rest Framework Backend

The backend has the following features:

- **Data model**: Represents a book with title, author, and ISBN.
- **Endpoints**:
- GET /books: Fetch all books.
- POST /books: Add a new book.
- PUT /books/<id>: Update an existing book.
- DELETE /books/<id>: Delete a book.

## React Frontend

The frontend has the following features:

- **Display all books** fetched from the API.
- **Form to add new books** (title and author fields).
- **Actions to edit and delete existing books**.
