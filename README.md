# 🎬 Movie Plus

**Movie Plus** is a modern and responsive movie discovery platform built with **React.js** and the **TMDB API**. Users can browse movies, search for specific titles, view detailed movie information, manage favourite movies, and keep track of recently viewed movies.

## 🌐 Live Demo

https://movieplus-abd.vercel.app/

## ✨ Features

* 🎬 Browse movies from TMDB
* 🔎 Search movies by title
* 📄 View detailed movie information
* 🧭 Dynamic movie details using route parameters
* ❤️ Add and remove favourite movies
* 👀 Recently viewed movies
* 🔢 Pagination for movie listings and search results
* 💾 Persist favourites and recently viewed movies using Local Storage
* ⚡ Redux Toolkit for global state management
* 🔄 Loading states
* ❌ API error handling
* 📭 No-data states
* 📱 Responsive design for desktop, tablet, and mobile
* 🧩 Reusable components
* 🛣️ Client-side routing with React Router
* 🎨 Cinematic cyberpunk-inspired UI

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript (ES6+)
* React Router
* Redux Toolkit
* CSS Modules
* React Icons

### API

* TMDB API

### Tools

* Create React App
* Git & GitHub
* Vercel
* Local Storage

## 📂 Project Structure

```text
src/
├── components/
│   ├── ErrorMessage/
│   ├── Loader/
│   ├── MovieCard/
│   ├── MovieGrid/
│   ├── NoData/
│   └── Pagination/
│
├── pages/
│   ├── Home/
│   ├── Movies/
│   ├── MovieDetails/
│   ├── Search/
│   └── Favourite/
│
├── redux/
│   ├── favouriteMovieSlice.js
│   ├── recentViewedSlice.js
│   └── store.js
│
├── services/
│   └── MovieApi.js
│
├── styles/
│   └── common.module.css
│
└── index.js
```

## 🧠 State Management

Movie Plus uses **Redux Toolkit** for global state management.

The application maintains two main pieces of global state:

### ❤️ Favourite Movies

The favourite movie slice handles:

* Adding movies to favourites
* Removing movies from favourites
* Preventing duplicate favourite movies
* Checking whether a movie is already favourited

### 👀 Recently Viewed Movies

The recently viewed slice handles:

* Adding viewed movies
* Moving an already-viewed movie back to the top
* Preventing duplicate movies
* Keeping only the latest **8 movies**

Both states are persisted using **Local Storage**, so favourites and recently viewed movies remain available after refreshing the application.

## 🔌 API Integration

Movie Plus uses the **TMDB API** to retrieve movie information.

The basic data flow is:

```text
User Action
     ↓
React Component
     ↓
Movie API Service
     ↓
TMDB API
     ↓
API Response
     ↓
Loading / Error / No Data / Movie Results
```

API-related logic is separated into the `services` directory to keep API communication separate from UI components.

## 🧭 Routing

The application uses **React Router** for client-side navigation.

```text
/                  → Home
/movies            → Movies
/movie/:id         → Movie Details
/search            → Search Movies
/favourite         → Favourite Movies
/*                 → 404 Not Found
```

Movie details use a dynamic route:

```text
/movie/:id
```

The movie ID is accessed using React Router's `useParams()` hook.

## 📄 Pagination

Pagination is implemented for both the Movies page and Search page.

A reusable `Pagination` component handles:

* Previous page
* Next page
* Current page
* Disabled Previous button on the first page
* Disabled Next button on the last page
* Resetting the scroll position when changing pages

## 🧩 Reusable Components

The project follows a reusable component-based architecture.

### MovieGrid

`MovieGrid` is responsible for rendering a collection of movies using reusable `MovieCard` components.

### MovieCard

`MovieCard` displays:

* Movie poster
* Movie title
* Rating
* Release year
* Favourite button

### Pagination

`Pagination` provides reusable pagination functionality for different pages.

### Other Components

* `Loader`
* `ErrorMessage`
* `NoData`

This approach reduces repeated UI logic and makes the application easier to maintain.

## 🎨 UI Design

Movie Plus uses a **cinematic cyberpunk-inspired design**.

### Color Palette

```text
Background:      #0D1117
Card Background: #161B22
Primary Accent:  #00F5FF
Secondary Accent:#FF007F
Primary Text:    #F0F6FC
Muted Text:      #8B949E
Borders:         #30363D
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/imabdurehman/movie-app.git
```

### 2. Navigate to the project

```bash
cd movie-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root and add your TMDB API configuration.

```env
REACT_APP_TMDB_API_KEY=your_api_key
```

### 5. Start the development server

```bash
npm start
```

The application will start on the local development server provided by Create React App.

## 📚 What I Learned

This project helped strengthen my practical understanding of:

* React component architecture
* React Hooks
* React Router
* REST API integration
* Async/Await
* Loading and error handling
* Pagination
* Redux Toolkit
* Global state management
* `useSelector` and `useDispatch`
* Local Storage persistence
* Reusable components
* CSS Modules
* Responsive UI development
* Git and GitHub workflow
* Vercel deployment

---

## Author

**Abdulrehman Siddiqi**

**GitHub:** https://github.com/imabdurehman

**LinkedIn:** https://www.linkedin.com/in/imabdurehman

