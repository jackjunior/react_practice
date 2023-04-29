export default function DropDownMenu() {
  return (
    <>
      <div className="dropdown">
        <div className="dropbtn">
          Dropdown
          <i className="fa fa-caret-down"></i>
        </div>
        <div className="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    </>
  );
}
