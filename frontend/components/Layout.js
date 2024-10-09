import React from "react";
import Head from "next/head";

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Course Management App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous" />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
            </Head>
            <div className="container">
            <main>
                <div className="album py-5">
                    <div className="container">
                        {props.children}
                    </div>
                </div>
            </main>
            <footer className="text-body-secondary py-5">
                <div className="container mt-5">
                    <p className="float-end">
                        <a href="#">Back to top</a>
                    </p>
                    <p className="mb-1">Made with <b>curiosity </b>By <a href="https://ettalha0x.github.io" target="_blank">Noureddine Ettalhaouy</a>.</p>
                </div>
            </footer>
            </div>
        </div>
    );
}

export default Layout;