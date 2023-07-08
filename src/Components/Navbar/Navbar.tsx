import { BsKanban, BsClipboard2PlusFill } from "react-icons/bs";
export default function Navbar() {
  return (
    <div className="navbar flex w-full items-center justify-between px-3 py-4  shadow-md bg-white">
      {/* logo */}
      <div className="logo-container w-1/6">
        <div className="logo flex items-center gap-2 select-none">
          <BsKanban className="text-4xl dark:fill-primary-dark fill-primary-light align-middle" />
          <h2 className="text-3xl font-bold dark:text-primary-dark text-primary-light">
            Kanban
          </h2>
        </div>
      </div>

      {/* Navbar Content */}
      <div className="navbar-content w-5/6 flex items-center justify-between ">
        {/* Board Name */}
        <div className="board-name">
          <h1 className="text-3xl font-semibold ">Board Name</h1>
        </div>
        {/* Actions */}
        <div className="actions">
          <button className="text-xl flex items-center gap-2 px-3 py-2 bg-primary-light text-light rounded-full hover:bg-primary-dark transition-colors duration-400">
            <BsClipboard2PlusFill className="text-xl dark:fill-dark fill-light align-middle" />{" "}
            Create task
          </button>
        </div>
      </div>
    </div>
  );
}
