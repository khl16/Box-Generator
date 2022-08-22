import { useState } from "react";

function useInputHook() {
    const [inputColor, setInputColor] = useState("")
    function handleChange(e) {
        setInputColor(e.target.value)
    }

    return {
        value: inputColor,
        onChange: handleChange
    }
}
export { useInputHook };