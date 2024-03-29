# Library App

This is a small library app project created using HTML, CSS, and JavaScript. The app allows users to manage a virtual library where they can add, remove, and update books. Each book can be displayed with details such as the author, title, number of pages, and whether it has been read or not.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Library App is an extension of the 'Book' example from a previous lesson, where we have implemented a basic library system with the following functionalities:

1. Add new books to the library.
2. Display the list of books in the library.
3. Remove books from the library.
4. Change the read status of books.

The app uses a simple array to store book objects, and the user can interact with the library through a user-friendly interface.

## Features

Here are the main features of the Library App:

- **Add Books:** Users can add new books to the library by providing details such as author, title, number of pages, and whether they have read the book or not.

- **Display Library:** The app displays the list of books in the library. Each book is shown with its details, and they can be displayed in a table or individual cards.

- **Remove Books:** Users can remove books from the library by clicking a button associated with each book. The app will remove the selected book from the library.

- **Change Read Status:** Users can mark books as read or unread by clicking a button associated with each book. This updates the read status of the book.

## Getting Started

To get started with the Library App, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/HarshDeep61034/Library
   ```

2. Open the project directory.

3. Open the `index.html` file in your web browser to run the app.

## Usage

Once you have the app running, you can use it to manage your virtual library:

- Click the "NEW BOOK" button to add a new book to the library. Fill in the book details in the form and submit it.

- The app will display the list of books in the library, including their details.

- To remove a book from the library, click the "Remove" button associated with that book.

- To change the read status of a book, click the "Toggle Read Status" button associated with that book.

Please note that this version of the app does not include any server-side storage. Book data is stored locally in the JavaScript array and will be lost when you close the app. Future versions of the app may include server-side storage options.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.

2. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them with clear and concise messages:

   ```bash
   git commit -m "Add feature: your feature name"
   ```

4. Push your changes to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request to merge your changes into the main branch of this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
