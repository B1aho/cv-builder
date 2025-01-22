export function FormField({ label, id, type = 'text', required = false, onChange, value = '' }) {
  return (
    <div className="form-row">
      <label htmlFor={id}>{label}</label>
      <input value={value} required={required} type={type} id={id} onChange={(e) => onChange(e, id)}/>
    </div>
  );
}