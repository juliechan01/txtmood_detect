import { useEffect, useState } from "react";
import axios from 'axios';
import TextList from "../components/TextList";
import TextForm from "../components/TextForm";

const Main = () => {
    const [ texts, setTexts ] = useState([]);
    const [ errors, setErrors ] = useState({});

    const createText = textParam => {
        axios.post('http://localhost:8000/api/texts/add', textParam)
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTexts([...texts, res.data]);
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            });
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/texts')
        .then((res) => {
            console.log(res.data);
            setTexts(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <div>
                <h1> TxtMood Detect </h1>
            </div>

            <div>
                <h3> All entries </h3>
                <TextList texts={ texts }/>
                <TextForm createText={ createText } initialBody='' errors={ errors } initialMood="Neutral 😐" options={options}/>
            </div>
        </>
    )
}

export default Main;

export const options = [
    { value: "affectionate", label: "Affectionate 🥰" },
    { value: "at ease", label: "At Ease 😌" },
    { value: "bold", label: "Bold 😈" },
    { value: "calm", label: "Calm 🧖‍♀️" },
    { value: "cheerful", label: "Cheerful 😁" },
    { value: "confident", label: "Confident 😎" },
    { value: "content", label: "Content 😊" },
    { value: "creative", label: "Creative 🖌️" },
    { value: "energized", label: "Energized 🔋" },
    { value: "excited", label: "Excited 🤩" },
    { value: "happy", label: "Happy 🙂" },
    { value: "hopeful", label: "Hopeful 🥹" },
    { value: "joyful", label: "Joyful 🥰" },
    { value: "productive", label: "Productive 👩🏻‍💻" },
    { value: "relaxed", label: "Relaxed 💆🏻‍♂️" },
    { value: "neutral", label: "Neutral 😐" },
    { value: "angry", label: "Angry 😠" },
    { value: "annoyed", label: "Annoyed 🙄" },
    { value: "anxious", label: "Anxious 😬" },
    { value: "depressed", label: "Depressed 😭" },
    { value: "distant", label: "Distant/disconnected 🫥" },
    { value: "envious", label: "Envious 😒" },
    { value: "frustrated", label: "Frustrated 😫" },
    { value: "grumpy", label: "Grumpy 😡" },
    { value: "insecure", label: "Insecure 👀" },
    { value: "irritable", label: "Irritable 🤬" },
    { value: "overwhelmed", label: "Overwhelmed 🤯" },
    { value: "pessimistic", label: "Pessimistic 😑" },
    { value: "sad", label: "Sad 😞" },
    { value: "stressed", label: "Stressed 🫨" },
    { value: "tired", label: "Tired 😴" }
]