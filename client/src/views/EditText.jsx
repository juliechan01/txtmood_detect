import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { options } from './Main';
import TextForm from '../components/TextForm';
import DeleteButton from '../components/DeleteButton';

const EditText = (props) => {
    const { id } = useParams();
    const [ text, setText ] = useState({});
    const [ loaded, setLoaded ] = useState(false);
    const [ errors, setErrors ] = useState({});
    const [ mood, setMood ] = useState(null);
    const navigate = useNavigate();

    const removeFromDom = () => {
        setText();
        navigate('/');
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/texts/${id}`)
            .then(res => {
                setText(res.data);
                setMood({ value: res.data.mood.toLowerCase(), label: res.data.mood })
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
        <div>
            <div className='head'>
                <h1> TxtMood Detect </h1>
                <div className='action-head'>
                    <Link to={'/'}> go back home </Link>
                    <div className='delete'>
                        <DeleteButton textId={text._id} successCallback={() => removeFromDom(text._id)} />
                    </div>
                </div>
            </div>

            <div>
                {
                    loaded && 
                        <div>
                            <TextForm createText={ updateText } initialBody={text.body} errors={errors} mood={ text.mood } setMood={setMood} options={options}/>
                        </div>
                }
            </div>
        </div>
    )
}

export default EditText;