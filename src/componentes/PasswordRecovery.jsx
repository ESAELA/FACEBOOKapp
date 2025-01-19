function PasswordRecovery () {
    return (
        <div>

            <nav className="bg-white flex justify-between h-[60px] shadow-sm ">
                    <img 
                        class="fb_logo _8ilh img cursor-pointer w-[150px] ml-5" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook">
                    </img>
                <div className="flex justify-end items-center gap-2 mr-7">
                    <input className="h-10 border w-[200px] focus:outline-none  rounded-md border-gray-300 p-3 focus:border-solid focus:border-blue-600 focus:shadow-lg" type="email" name="" id="" placeholder="E-mail do telémovel" />
                    <input className="h-10 border w-[200px] focus:outline-none rounded-md border-gray-300 p-3 focus:border-solid focus:border-blue-600 focus:shadow-lg" type="password" name="" id="" placeholder="Palavra-passe" />
                    <a className="flex justify-center items-center bg-blue-600 w-[130px] rounded-md h-10 text-white font-bold ">Iniciar sessão</a>
                    <a className="text-blue-600 hover:underline" href="/passwordrecovery">
                        Esqueceste-te da tua conta?
                    </a>    
                </div>
            </nav>
        <div className="flex justify-center p-[80px] ">
            <div className="w-[500px] h-[275px] bg-white rounded-md shadow-md">
                <div className="ml-2 p-3 ">
                    <h2 className="font-bold text-2xl ">
                        Encontrar a tua conta
                    </h2>
                </div>
                <div className="border-t-[1px] border-gray-200 ">
                    <h2 className="ml-2 p-3 text-[17.5px]">
                        Insere o teu e-mail ou número de telemóvel para procurares a tua conta.
                    </h2>
                    <input  className="ml-5 h-12 border w-[470px] rounded-md border-gray-300 p-4 " type="email" name="" id="" placeholder="E-mail ou número do telémovel" />
                </div>
                <div className="ml-2 p-4 mt-[23px] border-t-[1px] border-gray-200 flex justify-end gap-2">
                    <button className="bg-gray-300 w-[100px] h-9 rounded-md " type="submit">Cancelar</button>
                    <button className="bg-blue-600 w-[110px] h-9 rounded-md text-white"  type="submit">Pesquisar</button>
                </div>
            </div>
        </div>

        </div>
    )
}

export default PasswordRecovery;