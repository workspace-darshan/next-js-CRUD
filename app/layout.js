import { APP_NAME } from '@/utils/Constant';
import React from 'react';
import "@/styles/globals.css";

export const metadata = {
    title: {
        default: APP_NAME,
        template: `%s | ${APP_NAME}`
    },
    icons: {
        icon: '/next.svg',
        shortcut: '/next.svg',
    }
};
const DefaultLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
};

export default DefaultLayout;   