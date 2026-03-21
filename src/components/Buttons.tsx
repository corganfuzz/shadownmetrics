import { CdsButton } from '@cds/react/button';

export const Buttons = () => {
  return (
    <>
      <h2 cds-text="section">Buttons</h2>
      <section cds-layout="horizontal gap:sm">
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="danger" disabled>
          disabled
        </CdsButton>
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsButton action="outline">outline</CdsButton>
        <CdsButton action="outline" status="success">
          success
        </CdsButton>
        <CdsButton action="outline" status="danger">
          danger
        </CdsButton>
        <CdsButton action="outline" disabled>
          disabled
        </CdsButton>
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsButton action="flat">flat</CdsButton>
        <CdsButton action="flat" disabled>
          flat disabled
        </CdsButton>
      </section>
      <section cds-layout="horizontal gap:sm">
        <CdsButton loadingState="default">Default</CdsButton>
        <CdsButton loadingState="loading">Default</CdsButton>
        <CdsButton loadingState="success">Default</CdsButton>
        <CdsButton loadingState="error">Default</CdsButton>
      </section>
    </>
  );
};
