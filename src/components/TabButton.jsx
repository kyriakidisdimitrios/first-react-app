export default function TabButton({ children, onSelect, isSelected }) {
  function handleClick() {
    console.log('Hello World!');
    if (onSelect) {
      onSelect();
    }
  }

  return (
      <li>
        <button className={isSelected ? 'active' : undefined} onClick={handleClick}>
            {children}</button>
      </li>
  );
}