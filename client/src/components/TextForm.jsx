import { useState } from "react";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

const TextForm = (props) => {
    const { initialBody, onSubmitProp, errors, onTextUpdate } = props
    const [ body, setBody ] = useState(initialBody);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const updatedText = await onSubmitProp({ body });
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
                        <label> Check the mood of your text here! </label><br />
                        <GrammarlyEditorPlugin>
                            <input type="text" className={`form-control ${errors.body && 'is-invalid'}`} name='body' value={body} placeholder="Enter some text here" onChange = {(e) => setBody(e.target.value)}/>
                        </GrammarlyEditorPlugin>
                        { errors.body &&
                            <p className='text-danger'>{ errors.body.message }</p>
                        }
                    </div>
                </div>

                <div className='buttons'>
                    <input type="submit" className="btn btn-success buttons" value='Save this!' />
                </div>
            </form>

            <h2> The mood of your entry appears: </h2>
        </div>
    );
}

export default TextForm;