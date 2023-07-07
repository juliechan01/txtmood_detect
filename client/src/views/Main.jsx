import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import TextList from "../components/TextList";
import TextForm from "../components/TextForm";

const Main = (props) => {
    const [ texts, setTexts ] = useState([]);
    const [ errors, setErrors ] = useState({});
    const navigate = useNavigate();

    const createText = textParam => {
        axios.post('http://localhost:8000/api/texts/add', textParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTexts([...texts, res.data]);
                navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }

    return (
        <>
            <div className='head'>
                <h1> TxtMood Detect </h1>
            </div>

            <div className="body">
                <h3> All entries </h3>
                <TextList texts={ texts } setTexts={ setTexts } />
                <TextForm onSubmitProp={ createText } initialBody='' errors={ errors }/>
            </div>
        </>
    )
}

export default Main;