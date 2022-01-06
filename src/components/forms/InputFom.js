import NumberInput from "./NumberInput";
import NameInput from "./NameInput";
import EmailInput from "./EmailInput";

const InputForm = () => {
    return (
        <form className='inputForm'>
            <div className='control-group'>
                <NumberInput />
                <NameInput />
                <EmailInput />
            </div>
        </form>
    );
}

export default InputForm