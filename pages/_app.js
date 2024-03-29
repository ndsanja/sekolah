import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
