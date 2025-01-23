export function ControlBtns({onSubmit, onReset, formId}) {
  return (
    <div className="form-controlls">
      <button  className="control-btn submit" type="submit" form={formId} onClick={onSubmit}>Save data</button>
      <button className="control-btn clear" type="reset" onClick={onReset}>Clear form</button>
    </div>
  );
}