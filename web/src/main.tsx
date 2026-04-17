
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import "./styles/layout.css";
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

import { MantineProvider } from '@mantine/core';

createRoot(document.getElementById("root")!).render(
    <MantineProvider>
        <App />
    </MantineProvider>
);

