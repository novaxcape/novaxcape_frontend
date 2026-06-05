import {
  FiGrid,
  FiCalendar,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
} from "react-icons/fi";

const Sidebar = () => {
  const menuItems = [
    {
      icon: <FiGrid />,
      label: "Dashboard",
      active: true,
    },
    {
      icon: <FiCalendar />,
      label: "Bookings",
    },
    {
      icon: <FiBarChart2 />,
      label: "Revenue Trend",
    },
    {
      icon: <FiSettings />,
      label: "Settings",
    },
    {
      icon: <FiHelpCircle />,
      label: "Support",
    },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div>
        <div className="logo-section">
<img src="/novaxcape/logo.png" alt="Novaxcape Logo" className="logo" />

          <p>Admin Portal</p>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`nav-item ${
                item.active ? "active" : ""
              }`}
            >
              <span className="nav-icon">
                {item.icon}
              </span>

              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="sidebar-footer">
        <div className="account-section">
          <p className="account-title">
            ACCOUNT
          </p>

        <button className="logout-btn">
  <FiLogOut />
  <span>Exit Partner Portal</span>
</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;