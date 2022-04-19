import { render } from "react-dom";
import {BrowserRouter} from "react-router-dom";
import './theme/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DefalutScrollToTop from "./components/pages/DefaultScrollToTop";


const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
    <DefalutScrollToTop/>
    <App/>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
