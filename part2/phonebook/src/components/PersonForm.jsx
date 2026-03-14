const PersonForm = ({
  onSubmit,
  nameValue,
  nameChange,
  nameInputRef,
  numberValue,
  numberChange,
  buttonType,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name:{" "}
        <input ref={nameInputRef} value={nameValue} onChange={nameChange} />
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
