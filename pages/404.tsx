import Link from "next/link";

export default function Custom404() {
  return (
    <main>
      <h1>404 - That page does not seem to exist...</h1>
      <iframe
        src="https://giphy.com/embed/Ju7l5y9osyymQ"
        width="480"
        height="360"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <Link href="/" passHref>
        <button className="btn-blue">Go home</button>
      </Link>
    </main>
  );
}
