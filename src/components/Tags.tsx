import { CdsTag } from '@cds/react/tag';
import { CdsBadge } from '@cds/react/badge';

export const Tags = () => {
  return (
    <>
      <h2 cds-text="section">Tags</h2>
      <section cds-layout="horizontal gap:sm">
        <CdsTag readonly status="info">Info</CdsTag>
        <CdsTag readonly status="success">Success</CdsTag>
        <CdsTag readonly status="warning">Warning</CdsTag>
        <CdsTag readonly status="danger">Danger</CdsTag>
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsTag readonly color="gray">
          Austin <CdsBadge>1</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="purple">
          New York <CdsBadge>2</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="blue">
          Palo Alto <CdsBadge>3</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="orange">
          San Francisco <CdsBadge>12</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="light-blue">
          Seattle <CdsBadge>15</CdsBadge>
        </CdsTag>
      </section>
    </>
  );
};
