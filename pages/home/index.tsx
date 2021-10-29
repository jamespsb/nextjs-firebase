import { useState } from "react";
import HeaderBlock01 from "../../components/blocks/header_blocks/HeaderBlock01";

export default function HomePage() {
  const [blocks, setBlocks] = useState([
    {
      headerBlock01: {
        header: {
          key: "abc123",
          fontColor: "#1BAC86",
          fontSize: 20,
          content: "this is a header block",
        },
      },
    },
  ]);

  const addBlock = (block) => {
    const newBlocks = [...blocks, block]
    setBlocks(newBlocks)
  }

  const newBlock = {
    headerBlock02: {
      header: {
          key: "qwe345",
          fontColor: "#AF632C",
          fontSize: 24,
          content: "this is a new header block with a button",
      },
      button: {
        content: 'button with link',
        link: 'http://quickdash.app',
        width: 200,
        height: 100,
      }
    },
  }

  return (
    <main>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <SideBar handleClick={() => addBlock(newBlock)} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column'}}>
          {blocks.map((block, index) => {
            const blockName = Object.keys(block);

            return <HeaderBlock01 key={index} {...block.[blockName]} />;
          })}
        </div>
      </div>
    </main>
  );
}

function SideBar({ handleClick }) {
  return <button onClick={handleClick}>add block</button>;
}
