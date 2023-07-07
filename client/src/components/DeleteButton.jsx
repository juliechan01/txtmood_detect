import axios from 'axios';

const DeleteButton = (props) => {
    const { textId, successCallback } = props;

    const deleteText = (e) => {
        axios.delete(`http://localhost:8000/api/texts/${textId}`)
            .then(res => {
                console.log("Deleting...");
                successCallback();
            })
    }

    return (
        <button onClick={ deleteText } className='btn btn-danger'>
            Delete
        </button>
    )
}

export default DeleteButton;