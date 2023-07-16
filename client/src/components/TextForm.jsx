import axios from "axios";
import { useState } from "react";
import Select from 'react-select';

const TextForm = (props) => {
    const { initialBody, createText, errors, onTextUpdate, mood, setMood, options } = props
    const [ body, setBody ] = useState(initialBody);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const updatedText = await createText({ body, mood });
            onTextUpdate(updatedText);
        }
        catch(error) {
            console.log(error);
        };
    };

    return (
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
                        <Select options={options} defaultValue={ mood } onChange = {(e) => setMood(e.label)}/>
                    </div>
                </div>

                <div className='buttons'>
                    <input type="submit" className="btn btn-success buttons" value='Save this!' />
                </div>
            </form>

            <h2> You have set the mood to { mood }</h2>
            {/* <h2> The mood of your entry appears: </h2> */}
        </div>
    );
}

export default TextForm;