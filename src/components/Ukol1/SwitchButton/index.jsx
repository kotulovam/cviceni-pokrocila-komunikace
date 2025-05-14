import './style.css';

export const SwitchButton = ({ label, onSwitch, on }) => {
  return (
    <button
      onClick={onSwitch}
      className={`switch-button ${on ? 'switch-button--on' : ''} `}
    >
      <i className="switch-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
