import { createContext, ReactNode, useEffect, useState } from "react";
import { useToggle } from "react-use";
import tinycolor from "tinycolor2";

type ColorContextType = {
    foregroundColor: string;
    backgroundColor: string;

    contrastRatio: number;

    showForegroundColorPicker: boolean;
    showBackgroundColorPicker: boolean;

    setForegroundColor: (value: string) => void;
    setBackgroundColor: (value: string) => void;
    setShowForegroundColorPicker: (value: boolean) => void;
    ssetSowBackgroundColorPicker: (value: boolean) => void;
}

type ColorContextProviderProps = {
    children: ReactNode
}

export const ColorContext = createContext({} as ColorContextType);

export function ColorContextProvider(props: ColorContextProviderProps) {

    const [foregroundColor, setForegroundColor] = useState('#f2ebd9');
    const [backgroundColor, setBackgroundColor] = useState('#0f0f0f');

    const [contrastRatio] = useState(
        tinycolor.readability(backgroundColor, foregroundColor)
    );

    const [showForegroundColorPicker, setShowForegroundColorPicker] = useToggle(false);
    const [showBackgroundColorPicker, ssetSowBackgroundColorPicker] = useToggle(false);

    return (
        <ColorContext.Provider value={{
            foregroundColor,
            backgroundColor,
            contrastRatio,
            showForegroundColorPicker,
            showBackgroundColorPicker,
            setForegroundColor,
            setBackgroundColor,
            setShowForegroundColorPicker,
            ssetSowBackgroundColorPicker
        }}>
            {props.children}
        </ColorContext.Provider>

    );
};