import "./DateOfBirthDropdown.css";

export const DateOfBirthDropdown = ({ handleDobOnChange, dateOfBirth }) => {

    const generateDaysList = (daysCount) => {
        let arr = [];
        for (let i = 1; i <= daysCount; i++) {
            arr.push(
                <option key={i} value={i}>{i}</option>
            )
        }
        return arr;
    }

    const populateYear = () => {
        const currentYear = new Date().getFullYear();
        let optionArr = [];
        for (let i = currentYear; i >= currentYear - 118; i--) {
            optionArr.push(
                <option key={i} value={i}>{i}</option>
            )
        }
        return optionArr;
    }


    const populateMonths = () => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let optionArr = [];

        months.map((month, index) => {
            optionArr.push(
                <option key={index} value={month}>{month}</option>
            )
        })
        return optionArr;
    }

    const populateDays = () => {
        const daysCount = {
            maxDays: 31,
            medDays: 30,
            leapDays: 29,
            minDays: 28
        }
        const selectedMonth = dateOfBirth.month;
        let optionArr = [];

        if (dateOfBirth.month === "Feb") {
            if (Number(dateOfBirth.year) % 4 === 0) {
                optionArr.push(
                    generateDaysList(daysCount.leapDays)
                );
            } else {
                optionArr.push(
                    generateDaysList(daysCount.minDays)
                );
            }
        } else if (selectedMonth === "Apr"
            || selectedMonth === "Jun"
            || selectedMonth === "Sep"
            || selectedMonth === "Nov") {
            optionArr.push(
                generateDaysList(daysCount.medDays)
            )
        } else {
            optionArr.push(
                generateDaysList(daysCount.maxDays)
            );
        }
        return optionArr;
    }

    const handleOnChange = (e) => {
        handleDobOnChange(e);
    }

    return (
        <div className='dob-dropdown'>
            <select name="day" className='dob-select' onChange={handleOnChange}>
                {populateDays()}
            </select>
            <select name="month" className='dob-select' onChange={handleOnChange} >
                {populateMonths()}
            </select>
            <select name="year" className='dob-select' onChange={handleOnChange}>
                {populateYear()}
            </select>
        </div>
    )
}