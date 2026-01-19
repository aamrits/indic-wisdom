import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { WordDetail } from './pages/WordDetail';

function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    return (localStorage.getItem("theme") as "light" | "dark") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <BrowserRouter>
      {/* Global Theme Toggle */}
      <div style={{ position: "absolute", top: 16, right: 16 }}>
        <button onClick={toggleTheme} aria-label="Toggle theme" style={{ position: "fixed", right: "10px", zIndex: "99" }}>
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <Routes>
        <Route
          path="/"
          element={<Home theme={theme} />}
        />
        <Route
          path="/:slug"
          element={<WordDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
