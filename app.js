// select dom elements

let bookName = document.querySelector('#name')
let author = document.querySelector('#author')
let year = document.querySelector('#year')
let bookList = document.querySelector('#book-list')
let btn = document.querySelector('.btn')

// add event listener

btn.addEventListener('click', function(e){
    e.preventDefault();
    
    // check basic form input validation

    if(bookName.value ==='' && author.value=== '' && year.value === ''){
        alert('Input Valid Information')
    }
    else {
        let newRow= document.createElement('tr')

        // create book name

        let newBookName= document.createElement('th')
        newBookName.innerHTML = bookName.value
        newRow.appendChild(newBookName)

        // create author name
        let authorName= document.createElement('th')
        authorName.innerHTML = author.value
        newRow.appendChild(authorName)

        // create year

        let publishYear= document.createElement('th')
        publishYear.innerHTML = year.value
        newRow.appendChild(publishYear);

        bookList.appendChild(newRow)

        bookName.value =''
        author.value = ''
        year.value = ''
        

    } 
        
})

