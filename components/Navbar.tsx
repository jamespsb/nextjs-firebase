import { useContext } from "react";
import { UserContext } from "../lib/context";
import Link from "next/link";

export default function Navbar() {
  const { user, username } = useContext(UserContext);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/" passHref>
            <button className="btn-logo">FEED</button>
          </Link>
        </li>
        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin" passHref>
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`} passHref>
                <img alt="" src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed or has not created username */}
        {!username && (
          <>
            <li>
              <Link href="/enter" passHref>
                <button className="btn-blue">Log in</button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
