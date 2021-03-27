import "./App.css";
import "./Weather";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App container">
      <div className="weatherApp-wrapper">
        <div className="weatherApp">
          <>
            <Weather city="Frankfurt am Main" />
          </>
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/CatiMai/weatherreactproject"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code
        </a>{" "}
        by Caterina Maidhof
      </footer>
    </div>
  );
}
