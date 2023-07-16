import Login from "./login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FrontPage from "./FrontPage";
import AllStudents from "./AllStudents";
import AddStudent from "./AddStudent";
import EditStudent from "./EditStudent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/front" element={<FrontPage />} />
          <Route path="/all" element={<AllStudents />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
