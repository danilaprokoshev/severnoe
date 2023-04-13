import { Button } from "primereact/button";

interface IAppButton {
  label: string;
  onClick: () => void;
  loading?: boolean;
  className?: string;
}

const AppButton = ({
  onClick,
  label,
  loading,
  className,
}: IAppButton): JSX.Element => {
  return (
    <Button
      className={className}
      icon="pi pi-check"
      loading={loading}
      label={label}
      onClick={onClick}
    />
  );
};

export default AppButton;
