export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) { //anti na baloyme to menu sto return tou Tabs.jsx
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
