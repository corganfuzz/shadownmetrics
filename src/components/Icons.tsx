export const Icons = () => {
  return (
    <>
      <h2 cds-text="section">Icons</h2>
      <section cds-layout="horizontal gap:sm">
        <cds-icon size="lg" shape="user"></cds-icon>
        <cds-icon size="lg" shape="user" badge="info"></cds-icon>
        <cds-icon size="lg" shape="user" badge="success"></cds-icon>
        <cds-icon size="lg" shape="user" badge="danger"></cds-icon>
        <cds-icon size="lg" shape="user" badge="warning-triangle"></cds-icon>
      </section>
      <section cds-layout="horizontal gap:sm">
        <cds-icon size="lg" shape="user" solid="true"></cds-icon>
        <cds-icon size="lg" shape="user" solid="true" badge="info"></cds-icon>
        <cds-icon size="lg" shape="user" solid="true" badge="success"></cds-icon>
        <cds-icon size="lg" shape="user" solid="true" badge="danger"></cds-icon>
        <cds-icon size="lg" shape="user" solid="true" badge="warning-triangle"></cds-icon>
      </section>
    </>
  );
};
