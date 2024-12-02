import React, { useState } from 'react';

const Counter = MainCounter => {
    const NewComponent = () => {
        const [count , setCount] = useState(0)

        const increaseFunction = () => {
            setCount(count + 1)
        }
        return (
            <MainCounter count={count} increaseFunction={increaseFunction} />
        )
    }
    return NewComponent
}
export default Counter