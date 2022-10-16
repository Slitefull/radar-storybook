import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import App from "./app/app";

import 'swiper/css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

reportWebVitals();

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App/>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
