import { useContext } from "react";

import { ColorContext } from "../context/ColorContext";

export function useColor() {
    const value = useContext(ColorContext);

    return value;
}