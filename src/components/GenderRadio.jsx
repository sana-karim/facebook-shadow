import "./GenderRadio.css";

export const GenderRadio = ({ handleOnGenderSelect }) => {

    const handleSelect = (e) => {
        handleOnGenderSelect(e.target.id)
    }




    return (
        <div className="gender-radio">
            <div className='female'>
                <label htmlFor='female' className='gender-label'>Female</label>
                <input type="radio" name="gender" id='female' onChange={handleSelect} />
            </div>
            <div className='male'>
                <label htmlFor='male' className='gender-label'>Male</label>
                <input type="radio" name="gender" id='male' onChange={handleSelect} />
            </div>
            <div className='custom'>
                <label htmlFor='custom' className='gender-label'>Custom</label>
                <input type="radio" name="gender" id='custom' onChange={handleSelect} />
            </div>
        </div>
    )
}