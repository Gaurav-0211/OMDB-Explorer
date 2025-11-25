
# 🎬 OMDB Movie Explorer

A full-stack movie discovery platform built using **Spring Boot**, **React**, and **Tailwind CSS**, powered by the **OMDB API**.  
Search for movies, explore detailed descriptions and save your favorites—all inside a clean, modern, responsive UI.

---

## 🚀 Tech Stack

### **Frontend**
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔄 Axios / Fetch API
- 🧩 Modular Component Architecture

### **Backend**
- ☕ Spring Boot 4.0.0
- 🌐 RESTful API
- ⚡ Caching with Caffeine (Redis)
- 🔒 Secure API key via environment variables
- 🛠️ Maven + Java 17+

### **External API**
- 🎥 OMDB API (Open Movie Database)

---

## 📌 Features

### 🔍 Search Dashboard
- Search movies/series using title input  
- Automatic URL encoding  
- Fast, cached API responses  

### 🎞️ Results Grid
- Movie posters  
- Titles & Release Years  
- Fully responsive layout  

### 🎬 Detailed Movie View
- Plot, Genre, Director, Writer  
- Actor list  
- Ratings (IMDB, Rotten Tomatoes, Metacritic)  
- High-quality poster  
- Modern modal design  

### ⭐ Favorites
- Add/remove movies to favorites  
- Persisted using `localStorage`  
- Horizontal Favorites preview bar  

### 📱 Fully Responsive
- Optimized for:
  - Mobile  
  - Tablet  
  - Desktop  

---

## 🔄 Workflow (How It Works)

1. User searches for a movie title  
2. Frontend calls backend:
   ```
   GET /api/search?title=name
   ```
3. Backend encodes the title and forwards the request to OMDB API  
4. OMDB returns movie list → displayed in grid  
5. Clicking a movie fetches details:
   ```
   GET /api/movie/{imdbID}
   ```
6. Movie details shown in a modal  
7. User may add movie to Favorites  
8. Favorites saved locally and shown in a horizontal preview bar  

---

## 🧩 Backend API Endpoints

### **Search Movies**
```
GET /api/search?title={movie-title}
```

### **Get Movie Details**
```
GET /api/movie/{imdbID}
```

---

## 🔑 OMDB API Key Setup

Generate a free OMDB API key here:  
🔗 https://www.omdbapi.com/apikey.aspx

Set environment variable:

### Windows (PowerShell)
```powershell
$env:OMDB_API_KEY="your_api_key"
```

### Mac/Linux
```bash
export OMDB_API_KEY=your_api_key
```

---

## ⚙️ Running the Project

### **Backend**
```bash
cd backend
mvn spring-boot:run
```

### **Frontend**
```bash
cd frontend
npm install
npm run dev
```

Open in browser:
```
http://localhost:5173/
```

---

## 🗂️ Folder Structure

```
omdb-movie-explorer/
│
├── backend/
│   ├── src/main/java/com/omdb/...
│   ├── resources/application.properties
│   └── pom.xml
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── api.js
    │   └── App.jsx
    ├── index.html
    └── package.json
```


## Result
### Home, Search Bar and Favourite 
<img width="1837" height="786" alt="Screenshot 2025-11-25 164501" src="https://github.com/user-attachments/assets/0e50d756-ed21-4e71-baa1-6e8d5cac09f8" />
### Search Result
<img width="1828" height="931" alt="Screenshot 2025-11-25 164545" src="https://github.com/user-attachments/assets/e58855d8-fd45-48a7-a788-2ff2cc2f7217" />
### Single Content Result
<img width="902" height="778" alt="Screenshot 2025-11-25 164618" src="https://github.com/user-attachments/assets/b4fd53c0-5c23-474f-aaa5-b5301979f259" />
### Add to favourites
<img width="1082" height="767" alt="Screenshot 2025-11-25 164645" src="https://github.com/user-attachments/assets/60558a6b-01c1-4c70-a5cd-e12717f560bc" />
### Footer
<img width="1895" height="425" alt="Screenshot 2025-11-25 164705" src="https://github.com/user-attachments/assets/42e03900-09f4-4409-a2c6-cc5207e97d7e" />

---

## 🚀 Future Enhancements
- 🔐 Authentication + JWT  
- 💾 Save favorites in database  
- 🌓 Light/Light mode  
- 🎞️ Trending Movies section  
- ⚡ Pagination for search results  

---

---

## 📜 License

This project is developed by Gaurav Kumar and have licensed under the **MIT License**.
