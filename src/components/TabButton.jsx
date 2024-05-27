export default function TabButton({ children, onSelect }) {
  function handleClick() {
    console.log('Hello World!');
    if (onSelect) {
      onSelect();
    }
  }

  return (
      <li>
        <button onClick={handleClick}>{children}</button>
      </li>
  );
}