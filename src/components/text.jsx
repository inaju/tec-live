const TextComponent = ({ text, mode, className }) => {
    return (
        <div>
            {mode == "heading-1" &&
                <h1 className={`font-mona text-left xl:text-center text-4xl xl:text-[4rem] font-extrabold not-italic leading-[110%] tracking-[0.125rem] text-[color:var(--White,#FFF)] ${className}`}>
                    {text}
                </h1>
            }

            {mode == "paragraph-1" &&
                <p className={`font-inter text-left text-sm xl:text-center xl:text-[1.75rem] font-medium not-italic leading-[150%] text-[#D7DDE2]  ${className}`}>
                    {text}
                </p>
            }

            {mode == "paragraph-2" &&
                <p className={`font-inter text-sm xl:text-center xl:text-[1.75rem]  not-italic leading-[150%] text-[#D7DDE2] mt-[1.25rem] text-left text-[1.25rem] font-normal ${className}`}>
                    {text}
                </p>
            }

        </div>
    )
}

export default TextComponent