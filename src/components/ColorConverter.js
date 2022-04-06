import React, { useState } from 'react'

function ColorConverter() {
    const [hexColor, setHexColor] = useState('');
    const [rgbColor, setRgbColor] = useState('');

    const onChangeHandle = (e) => {
        let value = e.target.value;
        const hexRegex = /^[#]([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        if (value.length === 7) {
            if (hexRegex.test(value)) {
                setHexColor(value);
                let x = [];
                value = value.replace('#', '');
                x.push(parseInt(value.slice(0, 2), 16))
                x.push(parseInt(value.slice(2, 4), 16))
                x.push(parseInt(value.slice(4, 6), 16))
                setRgbColor('rgb(' + x.toString() + ')');
            } else {
                setRgbColor('Ошибка');
            }
        } else {
            setRgbColor('Ошибка')
        }
    }

  return (
    <div className="colorConverter-box" style={{backgroundColor: hexColor}}>
        <input className="hex-input" type="text" name="color-input" onChange={onChangeHandle} />
        <input className="rgb-input" type="text" disabled name="rgb-input" value={rgbColor} />
    </div>
  )
}

export default ColorConverter
