import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { options } from './Main';
import TextForm from '../components/TextForm';
import DeleteButton from '../components/DeleteButton';

const EditText = () => {
    const { id } = useParams();
    const [ text, setText ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    const removeFromDom = () => {
        setText();
        navigate('/');
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/texts/${id}`)
            .then(res => {
                console.log("Retrieving...[edit text response]", res);
                setText(res.data);
                setLoaded(true);
            })
    }, [id])

    const updateText = textParam => {
        axios.put(`http://localhost:8000/api/texts/${id}`, textParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <>
            <div>
                <h1> TxtMood Detect </h1>
                <div className='action-head'>
                    <Link to={'/'} className='bg-sky-300 rounded-md p-2 mr-3'> Go back 🏡 </Link>
                    <div className='delete'>
                        <DeleteButton textId={text._id} successCallback={() => removeFromDom(text._id)} />
                    </div>
                </div>
            </div>

            <div>
                {
                    loaded && 
                        <div>
                            <TextForm createText={ updateText } initialBody={text.body} errors={errors} initialMood={ text.mood } options={options}/>
                        </div>
                }
            </div>
        </>
    )
}

export default EditText;