import React, { useContext } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider, AppContext } from "./context/AppContext";
import { getTheme } from "./theme";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import ExchangeRatesPage from "./pages/ExchangeRatesPage"; // Import the new page

// A very simple error boundary component
class Boundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    return this.state.hasError
      ? <ErrorPage />
      : this.props.children;
  }
}

const AppContent = () => {
  const { themeMode } = useContext(AppContext);
  return (
    <ThemeProvider theme={getTheme(themeMode)}>
      <CssBaseline />
      <Router>
        <Boundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRatesPage />} /> {/* Add the route here */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Boundary>
      </Router>
    </ThemeProvider>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
