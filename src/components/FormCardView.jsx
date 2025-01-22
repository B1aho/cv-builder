export function FormCardView({title, onEditClick, onRemoveClick}) {
  return (
    // Сокращенная форма карточки
    <div className="form-card">
      <h3>{title}...</h3>
      <div className="form-card-controlls">
        {onRemoveClick && <button onClick={onRemoveClick}>X</button>}
        <button onClick={onEditClick}>Edit</button>
      </div>
    </div>
  ); 
}