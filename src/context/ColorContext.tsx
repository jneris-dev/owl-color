import { createContext, ReactNode, useEffect, useState } from "react";
import { useToggle, useFavicon } from "react-use";
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

    const [foregroundColor, setForegroundColor] = useState('#f2484b');
    const [backgroundColor, setBackgroundColor] = useState('#0f0f0f');

    const [contrastRatio] = useState(
        tinycolor.readability(backgroundColor, foregroundColor)
    );

    const [showForegroundColorPicker, setShowForegroundColorPicker] = useToggle(false);
    const [showBackgroundColorPicker, ssetSowBackgroundColorPicker] = useToggle(false);

    const colorIcon = tinycolor(foregroundColor);

    useFavicon(
        `data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' id='Capa_1' x='0px' y='0px' viewBox='0 0 462.5 462.5' style='enable-background:new 0 0 462.5 462.5;' xml:space='preserve' width='512' height='512'%3e%3cg%3e%3cpath style='fill:%23FF6E1D;' d='M301.256,455c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-40.06h-15V455z'/%3e%3cpath style='fill:%23FF6E1D;' d='M329.438,414.94V455c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-40.06H329.438z'/%3e%3cpath style='fill:%23FF6E1D;' d='M273.074,455c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-40.06h-15V455z'/%3e%3cpath style='fill:%23FF6E1D;' d='M146.257,455c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-40.06h-15V455z'/%3e%3cpath style='fill:%23FF6E1D;' d='M174.439,455c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-40.06h-15V455z'/%3e%3cpath style='fill:%23FF6E1D;' d='M118.075,455c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-40.06h-15V455z'/%3e%3cpath style='fill:%23${encodeURI(
            colorIcon.toHex()
        )}' d='M308.75,20.74C285.95,7.55,259.48,0,231.25,0s-54.7,7.55-77.5,20.74C130.95,7.55,104.48,0,76.25,0 v155h310V0C358.02,0,331.55,7.55,308.75,20.74z'/%3e%3cpath style='fill:%23F2EBD9;' d='M308.75,20.74c-44.298,25.625-74.915,72.546-77.5,126.76c-2.585-54.214-33.202-101.136-77.5-126.76 c-46.33,26.8-77.5,76.89-77.5,134.26l40.59,264.74c0.01,0.01,37.92,20.229,37.92,20.229l37.75-20.67l38.75,20.67l38.75-20.67 l38.75,20.67l37.21-19.85L386.25,155C386.25,97.63,355.08,47.54,308.75,20.74z'/%3e%3ccircle style='fill:%23FFCC75;' cx='152.81' cy='117.5' r='37.5'/%3e%3ccircle style='fill:%23FFCC75;' cx='309.69' cy='117.5' r='37.5'/%3e%3ccircle style='fill:%23082947;' cx='152.813' cy='117.5' r='7.5'/%3e%3ccircle style='fill:%23082947;' cx='309.687' cy='117.5' r='7.5'/%3e%3ccircle style='fill:%23FFCC75;' cx='238.569' cy='339.455' r='7.5'/%3e%3ccircle style='fill:%23FFCC75;' cx='268.569' cy='369.455' r='7.5'/%3e%3cpath style='fill:%23${encodeURI(
            colorIcon.toHex()
        )}' d='M76.25,155v300c49.718-31.409,82.743-86.844,82.743-150S125.968,186.409,76.25,155z'/%3e%3cpath style='fill:%23${encodeURI(
            colorIcon.toHex()
        )}' d='M303.507,305c0,63.156,33.026,118.591,82.743,150V155C336.532,186.409,303.507,241.844,303.507,305z '/%3e%3c/g%3e%3c/svg%3e`
    );

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