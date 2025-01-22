export function FormCardView({title, onEditClick}) {
  return (
    // Сокращенная форма карточки
    <div className="form-card">
      <h3>{title}...</h3>
      <div className="form-card-controlls">
        <button>X</button>
        <button onClick={onEditClick}>Edit</button>
      </div>
    </div>
  ); 
}