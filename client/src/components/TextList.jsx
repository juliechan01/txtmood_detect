import { useState } from 'react';
import { Link } from 'react-router-dom';

const TextList = (props) => {
    const { texts } = props;
    const [ sortDirection , setSortDirection ] = useState('Oldest to latest');

    const sortTexts = (direction) => {
        setSortDirection(direction);
    };

    const sortedTexts = [...texts].sort((a, b) => {
        if (sortDirection === 'Oldest to latest') {
            return new Date(a.createdAt) - new Date(b.createdAt);
        } else if (sortDirection === 'Latest to oldest') {
            return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
    });

    return (
        <div className='container'>
            <div className="card">
                <div className='buttons'>
                    <button className="bg-sky-300 rounded-md p-2 mr-3 mb-3 hover:bg-sky-500" onClick={() => sortTexts('Oldest to latest')}>
                        Sort Oldest to Newest
                    </button>

                    <button className='bg-sky-300 rounded-md p-2 mb-3 hover:bg-sky-500' onClick={() => sortTexts('Latest to oldest')}>
                        Sort Newest to Oldest
                    </button>
                </div>
                <p className='text-violet-500 underline decoration-dotted pb-3'>Sort Direction: { sortDirection }</p>
                {
                    sortedTexts.map((text, index) => {
                        return (
                            <div key={index}>
                                <div className='body'>
                                    <p>{text.body}</p>
                                    <p>{text.mood}</p>
                                    <Link to={`/texts/${text._id}`} className='buttons btn btn-outline-secondary'>
                                        Edit 📝
                                    </Link>
                                </div>
                            </div>
                                )
                            })
                        }
            </div>
        </div>
    )
}

export default TextList;