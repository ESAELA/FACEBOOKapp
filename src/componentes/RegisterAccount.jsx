function RegisterAccount () {
    function toggleDropdown () {
        let dropdown = document.querySelector('#dropdownButton #dropdown');
        dropdown.classList.toggle('hidden')
    }
    return (
        
        <div className="">

            <div className="flex justify-center mb-[13px] ">
            <img 
                class="fb_logo _8ilh img w-[290px]" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook">
            </img>
             </div>

        <div className="flex justify-center" >    
            <div className="bg-white shadow-md rounded-md flex flex-col h-[570px]  w-[460px] ">
                <div className="flex flex-col items-center border-b-[1px] border-gray-200 p-3  ">
                    <h2 className="text-[25px] font-medium">
                        Criar uma conta nova
                    </h2>
                    <p className="text-sm text-gray-400">
                        É rápido e fácil.
                    </p>
                </div>

                <div className="flex justify-center p-4 gap-3"> 
                    <input className="p-3 w-[220px] h-[40px] rounded-md border border-gray-300  " type="text" name="" id="" placeholder="Nome próprio" />
                    <input className="p-3 w-[200px] h-[40px] rounded-md border border-gray-300" type="text" name="" id="" placeholder="Apelido" />
                    
                </div>
            </div>
        </div>
        </div>
        
    )

    
}

export default RegisterAccount;