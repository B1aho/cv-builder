export function ControlBtns({onSubmit, onReset}) {
  return (
    <div className="form-controlls">
      <button type="submit" onClick={onSubmit}>Add data!</button>
      <button type="reset" onClick={onReset}>Clear form!</button>
    </div>
  );
}