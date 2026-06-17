import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Preloader from "./pages/Preloader"; // Adjust this path to match your folder structure

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* 1. Preloader Overlay Layer */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. Page Router Layer (Always mounted so it's ready underneath) */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

