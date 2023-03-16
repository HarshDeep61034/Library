// Side bar movement 

const sidebarEl = document.getElementsByClassName('sidebar')[0];
const addEl = document.getElementsByClassName('add')[0];
const mainEl = document.getElementsByClassName('main')[0];
addEl.addEventListener('click', ()=>{
    sidebarEl.style.display = "inline-block";
    mainEl.style.width = "83vw";
});

// -------------------------------------------------------------------

let myLibrary = [
   
];

function Book(title, author, pages, status) {
          this.title = title,
          this.author = author,
          this.pages = pages,
          this.status = status
}

const btn = document.getElementsByClassName('add-btn')[0];
btn.addEventListener('click', (addBookToLibrary));

function addBookToLibrary() {
    let titleEl = document.getElementById('title').value.toUpperCase();
    let authorEl = document.getElementById('author').value.toUpperCase();
    let pagesEl = document.getElementById('pages').value;
    let statusEl = document.getElementById('status').checked;
    const newbook = new Book(titleEl, authorEl, pagesEl, statusEl);
    myLibrary.push(newbook);
    bookDisplayer()
}

function bookDisplayer() {
    let x = myLibrary.length;
    let y = mainEl.childElementCount;
    for(let i=y-1; i<x; i++){
        const book = document.createElement('div');
        book.classList.add('books');
        book.innerHTML = `<div><h2>${myLibrary[i].title}</h2></div>
                           <div><h3>BY ~ ${myLibrary[i].author}</h3></div>
                           <div>${myLibrary[i].pages} Pages</div>
                          <button data-attribute="${i}" onclick="remove()" class="remove">Remove</button> 
                          `;
      if(myLibrary[i].status === true){
        book.innerHTML += `<button class="read" style="background-color: #22c55e;">Done</button>`;
      }
      else{
        book.innerHTML += `<button class="read">Read</button>`;
      }
        mainEl.appendChild(book);
       }
}

function done(){
    
}
// function remove(data-attribute){
//     var attribute = e.getAttribute("data-attribute");
//     console.log((attribute));
// }


