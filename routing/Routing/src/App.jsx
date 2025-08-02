import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px", minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
        <nav style={{ marginBottom: "20px" }}>
          
        </nav>

        <Routes>
         <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />
         </Route> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Landing() {
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <h2>Welcome to Allen</h2>
    </div>
  );
}

function Class11Program() {
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <h2>Class 11 Program</h2>
    </div>
  );
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <h2>Class 12 program is here</h2>
      <button
        onClick={redirectUser}
        style={{
          marginTop: "15px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Go back to landing page
      </button>
    </div>
  );
}

function Layout(){
  return <div style={{height:"100vh",background:"light green"}}>
    <Header />
    <div style={{height:"90vh",background:"white"}}>
      <Outlet />
    </div>

    Contact Us(footer)

  </div>
     

  
}

function Header(){
  return <div>
    <Link to="/" style={{ marginRight: "10px" }}>Allen</Link>
    <Link to="/neet/online-coaching-class-11" style={{ marginRight: "10px" }}>Class 11</Link>
    <Link to="/neet/online-coaching-class-12">Class 12</Link>

  </div>
}

function ErrorPage(){
  return <div>
    Sorry bhaiya,page not found
  </div>
}

export default App;
