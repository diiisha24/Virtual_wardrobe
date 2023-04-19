import SignUpPage from "./pages/SignUpPage";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoginPage from "./pages/SignUpPage/LoginPage";

function App() {
  return (
    <Router>
    {/* <ScroolToTop/> */}
    <Routes>
      {/* <Route path="/calculators" element={<Calculators/>}/>
      <Route path="/cred-pay" element={<CredPay/>}/>
      <Route path="/cred-pay" element={<CredPay/>}/>
      <Route path="/check-your-credit-score" element={<CreditScoreChecker/>}/> */}
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<SignUpPage/>}/>
      
    </Routes>
  </Router>
    // <div className="App">
    //   <SignUpPage/>
    // </div>
  );
}

export default App;
