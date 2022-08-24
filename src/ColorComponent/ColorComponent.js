import React, { useState } from "react";

import { Wrapper, Color } from './style';

/**
 * ColorComponent allows the user to enter their desired color, then add and
 * display them in color stacks
 * @returns ColorComponent
 */
function ColorComponent() {
    const [colors, setColors] = useState([]);
    const [value, setValue] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setColors([...colors, value]);
        setValue('');
    }

    return (
        <Wrapper>
            <form>
                <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Please type a color to add them to stack"></input>
                <button type="submit" onClick={(e) => onSubmitHandler(e) }>Add Colors</button>
            </form>
            {colors.length > 0 &&
                colors.map((data) => <Color backgroundColor={data}>{data}</Color>)
            }
        </Wrapper>
    );
}

export default ColorComponent;
