import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import "./App.css";
import Header from "./components/Header";
import InternshipList from "./components/InternshipList";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008BDC",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <InternshipList />
    </ThemeProvider>
  );
}

export default App;
