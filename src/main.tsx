import { HelmetProvider } from "react-helmet-async";
// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import {store} from '@/app/store.ts'

ReactDOM.createRoot(document.getElementById("root")!).render(
	<HelmetProvider>
		<Provider store={store}>
			<App />
		</Provider>
	</HelmetProvider>
);
