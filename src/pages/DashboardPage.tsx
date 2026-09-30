export default function DashboardPage() {
  return (
    <section className="dashboard-page">
      <header className="page-header">
        <div>
          <p className="page-eyebrow">Clinical Workstation</p>
          <h1>Dashboard</h1>
          <p className="page-description">
            Monitor patients, Holter sessions, recordings, and analysis activity.
          </p>
        </div>
      </header>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <span className="dashboard-card-label">Active Sessions</span>
          <strong>0</strong>
          <span>No active monitoring sessions</span>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card-label">Pending Analysis</span>
          <strong>0</strong>
          <span>No recordings awaiting analysis</span>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card-label">Recent Patients</span>
          <strong>0</strong>
          <span>No patient activity yet</span>
        </article>

        <article className="dashboard-card">
          <span className="dashboard-card-label">System Status</span>
          <strong>Ready</strong>
          <span>Clinical services are available</span>
        </article>
      </div>
    </section>
  );
}