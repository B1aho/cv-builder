export function ControlBtns({onSubmit, onReset, formId}) {
  return (
    <div className="form-controlls">
      <button type="submit" form={formId} onClick={onSubmit}>Add data!</button>
      <button type="reset" onClick={onReset}>Clear form!</button>
    </div>
  );
}