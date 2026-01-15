import { ButtonProps } from "@/interfaces"

const Button: React.FC<ButtonProps> = ({ text, bgColor, color, border, borderColor, textSize, onClick, image }) => {

    console.log(image)

    return (
        <button type="button" className={`flex items-center gap-2 ${color} ${bgColor} ${border} ${borderColor} ${textSize} rounded-full py-2 px-4 transition-colors duration-200`} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button