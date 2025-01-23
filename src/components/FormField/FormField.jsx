export function FormField({ label, id, type = 'text', required = false, onChange, value = '' }) {
  return (
    <div className="form-row">
      <label className={required && 'label-required'} htmlFor={id}>{label}</label>
      {type !== 'textarea' ?
        <input name={id} value={value} required={required} type={type} id={id} onChange={(e) => onChange(e, id)}/>
        : <textarea maxLength={120} name={id} value={value} required={required} id={id} onChange={(e) => onChange(e, id)}/>}
    </div>
  );
}