import React from 'react';
import Link from "next/link";

const Layout = ({children, title}) => {
    return (
        <div>

            <header className="bg-slate-200 py-10 mb-10">
                <Link href="/">
                        <h1 className="text-6xl text-center text-orange-600">{title}</h1>
                </Link>
            </header>

            <main className="container mx-auto">
                {children}
            </main>
        </div>
    );
};

export default Layout;