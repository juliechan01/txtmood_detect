import { useState } from "react";
import Select from 'react-select';

const TextForm = (props) => {
    const { initialBody, createText, errors, onTextUpdate, initialMood, options } = props
    const [ body, setBody ] = useState(initialBody);
    const [ mood, setMood ] = useState(initialMood);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const updatedText = await createText({ body, mood });
            onTextUpdate(updatedText);
        }
        catch(error) {
            console.log(error);
        };
        setBody('');
    };

    return (
        <div className="container">
            <div className='form-control'>
                <form onSubmit ={ onSubmitHandler }>
                    <div>
                        <div className='col mt-3'>
                            <label> Enter your text here! </label><br />
                            <input type="text" className={`form-control ${errors.body && 'is-invalid'}`} name='body' value={body} placeholder="Enter some text here" onChange = {(e) => setBody(e.target.value)}/>
                            { errors.body &&
                                <p className='text-danger'>{ errors.body.message }</p>
                            }
                        </div>
                        <div className='col mt-3'>
                            <label> How are you feeling today? </label><br />
                            <Select options={options} defaultValue={ options.find(e => e.label == mood) } onChange = {(e) => setMood(e.label)}/>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button type="submit" className="bg-green-600 rounded-md p-2 text-white hover:bg-green-800">Save this! 💾</button>
                    </div>
                </form>
                <h2> At the time of entry, you are feeling: { mood }</h2>
                {/* <h2> The mood of your entry appears: </h2> */}
            </div>
        </div>
    );
}

export default TextForm;