import { CdsBadge } from '@cds/react/badge';

export const Badges = () => {
  return (
    <>
      <h2 cds-text="section">Badge</h2>
      <section cds-layout="horizontal gap:sm">
        <CdsBadge status="info">2</CdsBadge>
        <CdsBadge status="success">3</CdsBadge>
        <CdsBadge status="warning">12</CdsBadge>
        <CdsBadge status="danger">15</CdsBadge>
        <CdsBadge color="gray">1</CdsBadge>
        <CdsBadge color="purple">1</CdsBadge>
        <CdsBadge color="blue">15</CdsBadge>
        <CdsBadge color="orange">2</CdsBadge>
        <CdsBadge color="light-blue">3</CdsBadge>
      </section>
    </>
  );
};
