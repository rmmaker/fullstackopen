const PersonForm = ({
  onSubmit,
  nameValue,
  nameChange,
  numberValue,
  numberChange,
  buttonType,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={nameValue} onChange={nameChange} />
      </div>
      <div>
        number: <input value={numberValue} onChange={numberChange} />
      </div>
      <div>
        <button type={buttonType}>add</button>
      </div>
    </form>
  );
};

export default PersonForm;
