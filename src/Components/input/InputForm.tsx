type InputFormProps = {
    title: string;
    placeholder: string;
    name: string;
    type:string
};

const InputForm = ({ title, placeholder, name ,type }: InputFormProps) => {
    return (
        <div className="grid">
            <label htmlFor={name} className="text-zinc-500 font-bold  my-3  ">{title}</label>
            <input type={type} id={name} placeholder={placeholder} className="bg-transparent border-b-2 font-medium border-zinc-500 text-zinc-500 p-2 focus:border-amber-600 focus:outline-none"/>
        </div>
    );
};

export default InputForm;
