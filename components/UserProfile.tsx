import style from "../config.json";

export default function UserProfile({ user }) {
  const { color, fontSize } = style.header_block.header;

  return (
    <div className="box-center">
      <img alt="" src={user?.photoURL} className="card-img-center" />
      <p>
        <i>@{user?.username}</i>
      </p>
      <h1 style={{ color, fontSize }}>{user?.displayName}</h1>
    </div>
  );
}
