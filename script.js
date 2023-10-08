const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector("#add-btn");
const submitButton = document.querySelector("#submit-btn")
const booksSection = document.querySelector(".books-section");
const readbtn = document.querySelectorAll(".read-btn");
const myLibrary = [
	{
	  title: "Can't Hurt Me",
	  author: "David Goggins",
	  pages: 300,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/61pDNU9qEGL._AC_UF894,1000_QL80_.jpg"
	},
	{
	  title: "The Great Gatsby",
	  author: "F. Scott Fitzgerald",
	  pages: 180,
	  readed: false,
	  imgurlEl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CLhiEvo7eCv787_W6rL55s7jnvHe099frg&usqp=CAU"
	},
	{
	  title: "To Kill a Mockingbird",
	  author: "Harper Lee",
	  pages: 281,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/81gepf1eMqL._SL1500_.jpg"
	},
	{
	  title: "1984",
	  author: "George Orwell",
	  pages: 328,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/41gH8Q32oFL.jpg"
	},
	{
	  title: "The Catcher in the Rye",
	  author: "J.D. Salinger",
	  pages: 224,
	  readed: false,
	  imgurlEl: "https://m.media-amazon.com/images/I/7108sdEUEGL._SL1500_.jpg"
	},
	{
	  title: "Pride and Prejudice",
	  author: "Jane Austen",
	  pages: 279,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/71Q1tPupKjL._SL1360_.jpg"
	},
	{
	  title: "The Hobbit",
	  author: "J.R.R. Tolkien",
	  pages: 310,
	  readed: false,
	  imgurlEl: "https://m.media-amazon.com/images/I/71a+5TjuYDL._SL1161_.jpg"
	},
	{
	  title: "The Hunger Games",
	  author: "Suzanne Collins",
	  pages: 374,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/61+t8dh4BEL._SL1200_.jpg"
	},
	{
	  title: "Harry Potter and the Sorcerer's Stone",
	  author: "J.K. Rowling",
	  pages: 320,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/71HbYElfY0L._SL1500_.jpg"
	},
	{
	  title: "The Lord of the Rings",
	  author: "J.R.R. Tolkien",
	  pages: 1178,
	  readed: false,
	  imgurlEl: "https://m.media-amazon.com/images/I/71VjmMcE-rL._SL1183_.jpg"
	},
	{
	  title: "The Da Vinci Code",
	  author: "Dan Brown",
	  pages: 454,
	  readed: true,
	  imgurlEl: "https://m.media-amazon.com/images/I/91Q5dCjc2KL._SL1500_.jpg"
	}
  ];		

// the constructor...
function Book(title, author, pages, readed, imgurlEl) {
	this.title = title
	this.author = author
	this.pages = pages
	this.readed = readed
	this.imgurlEl = imgurlEl
}

// This will use Book constrcutor to make
// book object and add it to Array.
function addBookToLibrary(e) {
	let titleEl = document.querySelector("#title").value;
	let authorEl = document.querySelector("#author").value;
	let pagesEl = document.querySelector("#pages").value;
	let readedEl = document.querySelector("#readed").checked;
	let imgurlEl = document.querySelector("#img-url").value;
	const newBook = new Book(titleEl, authorEl, pagesEl, readedEl, imgurlEl);
	myLibrary.push(newBook);
	console.log(myLibrary);
	renderBooks();
}

function renderBooks() {
	let noOfBooks = myLibrary.length;
	booksSection.innerHTML = '';
	for (let i = 0; i < noOfBooks; i++) {
		const kitab = document.createElement('div');
		kitab.classList.add('book');
		kitab.innerHTML = `
		<div class="book-img-div"><img class="book-img" src=${ myLibrary[i].imgurlEl ? myLibrary[i].imgurlEl : "./book.jpg"  } alt=""></div>
				<h1>${myLibrary[i].title}</h1>
				<p>${myLibrary[i].author}</p>
				<div class="reading-div">
				<p>${myLibrary[i].pages} Pages</p>
				<img class="reading-p" src=${myLibrary[i].readed ? "./eye.png" : "./hide.png"} width="30px">
				</div>
				<div class="book-btn">
				<button class="read-btn" id=${i}>Read</button>
					<button class="remove-btn" id=${i}>Remove</button>
					</div>`;
		booksSection.appendChild(kitab);
	}
}

// onclick Events here

submitButton.addEventListener('click', () => addBookToLibrary());

addBtn.addEventListener('click', () => {
	overlay.style.display = 'flex';
});

overlay.addEventListener('click', (e) => {
	if (e.target.classList.contains('overlay')) {
		overlay.style.display = 'none';
	}
});

booksSection.addEventListener('click', (e) => {
	if (e.target.classList.contains('remove-btn')) {
		myLibrary.splice(e.target.id, 1);
		renderBooks();
	}
	if (e.target.classList.contains('read-btn')) {
		let index = e.target.id;
		let status = myLibrary[index].readed;
		myLibrary[index].readed = !status;
		renderBooks();
	}
  });
  
  renderBooks();