export default function HeaderBlock01(props) {
  console.log("header props", props);
  return (
    <main>
      <h1
        style={{
          color: props.header.fontColor,
          fontSize: props.header.fontSize,
        }}
      >
        {props.header.content}
      </h1>
      {props.button ? (
        <button
          style={{ width: props.button.width, height: props.button.height }}
          onClick={() => alert(`redirecting to ${props.button.link}`)}
        >
          {props.button.content}
        </button>
      ) : null}
    </main>
  );
}
