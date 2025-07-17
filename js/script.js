/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

//showPage function - takes in: list as array of objects, page as an argument to determine selected page #
const showPage = (list, page = 1) => {
  //startIndex takes in the number of the page, multiplies it by the number of cards on page (9)
  // - then subtracts 9 so on page 1, startIndex will be 0
  const startIndex = page * 9 - 9
  //endIndex takes multiplies the page number by 9 to find the index of the last student to be displayed on page
  const endIndex = page * 9

  //student list gets the unordered list with the class "student-list"
  const studentList = document.querySelector('ul.student-list')

  //set studentList's innerHTML to empty string to remove any students that were previously displayed
  studentList.innerHTML = ''

  //for loop to go over list of students
  for (let i = 0; i < list.length; i++) {
    //conditional to make sure we're only going over the students that are supposed to be on the page
    if (i >= startIndex && i < endIndex) {
      //html taken from instructions page - in template literal
      const student = list[i]
      const html = `
      <li class='student-item cf'>
        <div class='student-details'>
          <img class='avatar' src='${student.picture.large}' alt='Profile Picture'>
          <h3>${student.name.first} ${student.name.last}</h3>
          <span class='email'>${student.email}</span>
        </div>
        <div class='joined-details'>
          <span class='date'>Joined ${student.registered.date}</span>
        </div>
      </li>
      `
      //insert elements using insertAdjacentHTML and beforeend
      studentList.insertAdjacentHTML('beforeend', html)
    }
  }
}

//addPagination function responsible for rendering pagination buttons at the bottom of the page
const addPagination = (list) => {
  //determine number of buttons with Math.ceil because even if there's only 1 student on the next page, they need to be displayed.
  const numberOfButtons = Math.ceil(list.length / 9)
  //find and store link-list ul
  const linkList = document.querySelector('ul.link-list')

  //use innerHTML property to set link-list to empty string to remove any previously generated pagination buttons
  linkList.innerHTML = ''

  //loop over number of buttons - start with 1 because people don't deal with 0 index
  for (let i = 1; i <= numberOfButtons; i++) {
    const html = `
    <li>
      <button type='button'>${i}</button>
    </li>
    `

    //add buttons to html
    linkList.insertAdjacentHTML('beforeend', html)
  }
  //select first pagination button and set class to active
  linkList.querySelector('button').classList.add('active')

  //create event listener to listen for clicks on the .link-list element
  linkList.addEventListener('click', (e) => {
    //find the active button
    const activeButton = linkList.querySelector('.active')
    //look for clicked button
    const buttonClicked = e.target.closest('button')

    //if there is an active button (always because it's set) and a button is clicked:
    if (activeButton && buttonClicked) {
      //remove active from the active button
      activeButton.classList.remove('active')
    }

    //if a new button is clicked, add active class
    if (buttonClicked) {
      buttonClicked.classList.add('active')
      let newPage = Number(buttonClicked.innerHTML)
      showPage(data, newPage)
    }
  })
}

//add search button based on instructions page directions
//find the header
const header = document.querySelector('header')
const title = document.querySelector('h2')

const label = document.createElement('label')
label.setAttribute('for', 'search')
label.className = 'student-search'

const span = document.createElement('span')
span.textContent = 'Search by Name'

const input = document.createElement('input')
input.id = 'search'
input.placeholder = 'Search by name...'

const button = document.createElement('button')
button.type = 'button'
button.innerHTML = "<img src='img/icn-search.svg' alt='Search Icon'>"

//append what's been created
label.appendChild(span)
label.appendChild(input)
label.appendChild(button)
title.insertAdjacentElement('afterend', label)

//find search and search button
const searchInput = document.getElementById('search')
const searchButton = document.querySelector('button')

//helper function to filter data via search
const filterStudents = (searchText, list) => {
  const lowerCaseText = searchText.toLowerCase()
  const results = []

  for (let i = 0; i < list.length; i++) {
    const student = list[i]
    const fullName = `${student.name.first} ${student.name.last}`.toLowerCase()

    if (fullName.includes(lowerCaseText)) {
      results.push(student)
    }
  }

  return results
}

//helper function to perform search on keyup or search click
const performSearch = () => {
  const searchText = searchInput.value
  const results = filterStudents(searchText, data)

  if (results.length > 0) {
    showPage(results, 1)
    addPagination(results)
  } else {
    studentList.innerHTML = `<li><h3>No results found...</h3></li>`
  }
}

//event listener for keyup

//event listener for search button click

// Call functions
showPage(data, 1)
addPagination(data)
