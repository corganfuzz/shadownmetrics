export const Timeline = () => {
  return (
    <>
      <h2 cds-text="section">Timeline</h2>
      <ul className="clr-timeline clr-timeline-vertical">
        <li className="clr-timeline-step">
          <div className="clr-timeline-step-header">11:59 am</div>
          <cds-icon role="img" shape="circle" aria-label="Not started"></cds-icon>
          <div className="clr-timeline-step-body">
            <span className="clr-timeline-step-title">Add KMS</span>
            <span className="clr-timeline-step-description">Root CA certificate requested.</span>
          </div>
        </li>
        <li className="clr-timeline-step">
          <div className="clr-timeline-step-header">11:59 am</div>
          <cds-icon role="img" shape="dot-circle" aria-label="Current"></cds-icon>
          <div className="clr-timeline-step-body">
            <span className="clr-timeline-step-title">Add KMS</span>
            <span className="clr-timeline-step-description">
              Root CA certificate requested. Upload it to the KMS to complete the connection.
              <img src="https://placehold.co/350x150" alt="Example of an Image in a Card" />
            </span>
          </div>
        </li>
        <li className="clr-timeline-step">
          <div className="clr-timeline-step-header">11:59 am</div>
          <div className="spinner spinner-md" aria-label="In progress">Fetching data</div>
          <div className="clr-timeline-step-body">
            <span className="clr-timeline-step-title">Make vCenter trust KMS</span>
            <span className="clr-timeline-step-description">
              Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long
              and very long.
            </span>
          </div>
        </li>
        <li className="clr-timeline-step">
          <div className="clr-timeline-step-header">11:59 am</div>
          <cds-icon role="img" shape="success-standard" aria-label="Completed"></cds-icon>
          <div className="clr-timeline-step-body">
            <span className="clr-timeline-step-title">Make KMS trust vCenter</span>
            <span className="clr-timeline-step-description">Upload it to the KMS to complete the connection. Third
              sentence.
              <button className="btn btn-sm">Refresh</button>
            </span>
          </div>
        </li>
        <li className="clr-timeline-step">
          <div className="clr-timeline-step-header"></div>
          <cds-icon role="img" shape="error-standard" aria-label="Error"></cds-icon>
          <div className="clr-timeline-step-body">
            <span className="clr-timeline-step-title">Connected</span>
            <span className="clr-timeline-step-description">No. It's not connected.</span>
          </div>
        </li>
      </ul>
    </>
  );
};
