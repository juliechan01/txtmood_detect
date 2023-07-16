import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TextList = (props) => {
    const { texts , setTexts, mood } = props;
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

    const handleTextUpdate = (updatedText) => {
        const updatedTexts = texts.map((text) => {
            if(text._id === updatedText._id) {
                return updatedText;
            }
            return text;
        });
        setTexts(updatedTexts);
    }

    return (
        <div className='card'>
            <div className="card-body">
                <div>
                    <button className='btn btn-primary mb-3' onClick={() => sortTexts('Oldest to latest')}>
                        Sort Oldest to Newest
                    </button>

                    <button className='btn btn-primary mb-3 ms-2' onClick={() => sortTexts('Latest to oldest')}>
                        Sort Newest to Oldest
                    </button>
                </div>
                <p className='plum'>Sort Direction: { sortDirection }</p>
                {
                    sortedTexts.map((text, index) => {
                        return (
                            <div key={index}>
                                <div className='body'>
                                    <p>{text.body}</p>
                                    <p>{text.mood}</p>
                                    <Link to={`/texts/${text._id}`} className='btn btn-outline-secondary me-2'>
                                        Edit
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