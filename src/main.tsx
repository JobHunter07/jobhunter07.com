
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

  import * as Swetrix from 'swetrix'

  Swetrix.init('qh32mFcUeEUc')
  Swetrix.trackViews()

  createRoot(document.getElementById("root")!).render(<App />);
  