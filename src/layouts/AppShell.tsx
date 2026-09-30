import { NavLink, Outlet } from "react-router-dom";

export default function AppShell() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-brand">
          <span className="app-brand-mark">H</span>
          <div>
            <div className="app-brand-name">Holter ECG</div>
            <div className="app-brand-subtitle">Clinical Analysis Platform</div>
          </div>
        </div>

        <div className="app-header-status">
          <span className="status-indicator" />
          <span>System Ready</span>
        </div>
      </header>

      <div className="app-body">
        <aside className="app-sidebar">
          <nav aria-label="Primary navigation">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-item${isActive ? " nav-item-active" : ""}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/patients"
              className={({ isActive }) =>
                `nav-item${isActive ? " nav-item-active" : ""}`
              }
            >
              Patients
            </NavLink>

            <NavLink
              to="/sessions"
              className={({ isActive }) =>
                `nav-item${isActive ? " nav-item-active" : ""}`
              }
            >
              Holter Sessions
            </NavLink>

            <NavLink
              to="/analysis"
              className={({ isActive }) =>
                `nav-item${isActive ? " nav-item-active" : ""}`
              }
            >
              Analysis
            </NavLink>

            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `nav-item${isActive ? " nav-item-active" : ""}`
              }
            >
              Settings
            </NavLink>
          </nav>
        </aside>

        <main className="app-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}