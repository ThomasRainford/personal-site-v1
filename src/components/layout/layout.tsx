import DrawerContent from "../navbar/mobile/DrawerContent";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="drawer drawer-end">
      <input id="navbar-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">{children}</div>
      <div className="drawer-side">
        <label
          htmlFor="navbar-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu bg-base-200 min-h-full h-[100%] w-60  p-5">
          <div className="mt-12 h-[100%]">
            <DrawerContent />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
