# Data Pagination and Filtering

This project is part of Treehouse's Fullstack JavaScript Techdegree (Unit 2), focusing on effectively displaying larger sets of data using pagination and filtering techniques. Built using HTML, CSS, and Vanilla JavaScript.

---

##  Overview

Many real-world web applications need to present large data sets in a user-friendly way. This project implements:

- **Pagination** — Splitting lists of items into manageable pages with controls like "Next" and "Previous".
- **Filtering** — Providing input-based filters (e.g., by name or keyword) to dynamically refine visible results.
- **Search Integration** — Combining search terms with pagination to narrow down results quickly.

---

##  How It Works

1. **Data Loading**  
   JavaScript imports a predefined array of objects (e.g., `data.js`) that represent items (students, people, etc.) to be paginated.

2. **Pagination Logic (in `app.js`)**  
   - Uses page number and items-per-page to determine which items to display.
   - Generates page buttons dynamically based on total items.
   - Handles “previous” and “next” navigation.

3. **Filtering Functionality**  
   - A search input field filters the data array based on user text (e.g., name matches).
   - Resets pagination state (e.g., return to first page) when filter changes.

4. **Rendering UI**  
   - Renders the current filtered subset of items.
   - Updates page navigation buttons accordingly.
   - Responsive interactions: clicking a page number, or filtering using the search bar updates results instantly.

---

##  Usage

1. Clone or download the repository.
2. Open `index.html` in a modern browser.
3. Explore pagination controls and filters live.
4. Optional: Adjust the number of items per page via JavaScript, or customize styles in `css/styles.css`.

---

##  Features & Enhancements

- Fully functional pagination UI with dynamic page links.
- Real-time filtering—updates results as you type.
- Clean HTML output with thoughtful CSS styling.
- Room for enhancements like "page size selector", debounce search, or infinite scroll.

---

##  Tech Stack

- **HTML5** — Semantic structure with accessible elements.
- **CSS3** — Simple grid/flex layouts for clean presentation.
- **Vanilla JavaScript (ES6+)** — Modular functions to handle data state and UI rendering.
