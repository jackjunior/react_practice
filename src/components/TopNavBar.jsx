import DropDownMenu from "./DropDownMenu";

export function TopNavBar() {
  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          Home
        </a>
        <DropDownMenu />
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </>
  );
}
