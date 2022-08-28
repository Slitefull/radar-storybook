import React, { Suspense } from "react";
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
      <Suspense fallback={<div>Loading...</div>}>
        <App/>
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
);

reportWebVitals();
