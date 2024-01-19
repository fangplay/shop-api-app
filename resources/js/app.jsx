import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import Shop from './Pages/Shop/Index';

const appName = import.meta.env.VITE_APP_NAME || 'NeoShop';

// const root = createRoot(document.getElementById('app'));
// root.render(<Shop />);

createRoot(document.getElementById('app')).render(<Shop />);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx', { eager: true })),
    setup({ el, App, props }) {
        // const root = createRoot(el);

        // root.render(<App {...props} />);

        createRoot(el).render(<App {...props} />)
    },
    progress: {
        color: '#4B5563',
    },
});
