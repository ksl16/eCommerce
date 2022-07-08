import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from './app/store'
import { Provider } from 'react-redux'

export {default as Brand} from "./components/Brand";
export {default as Footer} from "./components/Footer";
export {default as Header} from "./components/Header";
export {default as HomeCatList} from "./components/HomeCatList";
export {default as HomeCollectionWidgets} from "./components/HomeCollectionWidgets";
export {default as HomeSlider} from "./components/HomeSlider";
export {default as HomeWidgets} from "./components/HomeWidgets";
export {default as JustArrivesProducts} from "./components/JustArrivesProducts";
export {default as Navigation} from "./components/Navigation";
export {default as SidebarCategories} from "./components/SidebarCategories";
export {default as StayUpdate} from "./components/StayUpdate";
export {default as TopHeader} from "./components/TopHeader";
export {default as TrandyProductsList} from "./components/TrandyProductsList";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

