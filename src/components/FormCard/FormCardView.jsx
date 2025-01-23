import trash from '../../assets/trash.svg';
import edit from '../../assets/edit.svg';

export function FormCardView({title, onEditClick, onRemoveClick}) {
  return (
    <div className="form-card">
      <h3>{title} ...</h3>
      <div className="form-card-controlls">
        {onRemoveClick && <button className='card-btn' onClick={onRemoveClick}><img src={trash} alt="trash-icon"/></button>}
        <button className='card-btn' onClick={onEditClick}><img src={edit} alt="edit-icon"/></button>
      </div>
    </div>
  ); 
}