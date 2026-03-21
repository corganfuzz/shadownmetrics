import { CdsAlert, CdsAlertGroup } from '@cds/react/alert';

interface AlertsProps {
  show: boolean;
  onClose: () => void;
}

export const Alerts = ({ show, onClose }: AlertsProps) => {
  if (!show) return null;

  return (
    <CdsAlertGroup status="warning">
      <CdsAlert onCloseChange={onClose} closable>
        Hello World
      </CdsAlert>
    </CdsAlertGroup>
  );
};
