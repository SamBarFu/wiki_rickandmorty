import React from 'react';
import { AppLayout } from '@components/layouts/AppLayout';
import { Home } from '@pages/Home';
import '@/styles/app.scss';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <AppLayout>
            <Home />
        </AppLayout>
    );
}

export default App;