
type inputTextProps= {
    name:string
    label:string 
    defaultValue:string
    placeHolder?:string
}
const InputText = ({name,label, defaultValue, placeHolder}:inputTextProps) =>{
    return (
        <div className="w-full grid text-zinc-400 p-2 ">
            <label htmlFor={name} className="">{label}</label>
            <input className="rounded-xl border border-amber-600 p-5 bg-transparent " type="text" defaultValue={defaultValue} placeholder={placeHolder} id={name}/>
        </div>
    )
}

export default InputText