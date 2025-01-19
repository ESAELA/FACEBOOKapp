

function NewPage () {
    return (
        <div>
            <nav className="bg-red-500 flex items-center justify-center text-white h-[85px]">

                <div className="flex items-center">
                    <div className="flex items-center mr-[430px]">
                        <img
                            className="fb_logo _8ilh cursor-pointer img w-[230px] mt-[20px] h-[100px]" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook">    
                        </img>
                        <a className="bg-green-500 flex w-[70px] h-[30px] mb-[-24px] ml-[-13px] items-center justify-center rounded-sm text-sm" href="">Registrar</a>
                    </div>
                </div>

                <div className="mb-[-6px] flex justify-between gap-[7px]">
                    <a className="text-sm" href="">Aderir ou iniciar sessão no Facebook</a>
                    <img src="/src/icons/icon.svg" alt="" className="w-[8px] mt-[4px]  " />
                </div>
                

            </nav>
            <div className="flex flex-col justify-center items-center p-[20px] gap-[40px] ">
                <div className="flex flex-col mr-[68px]">
                    <div>
                        <h1 className="font-bold text-[23px]">
                            Criar uma Página
                        </h1>
                    </div>
                    <div>
                    <span className="text-[14px]">
                        Liga as pessoas da comunidade mundial do Facebook ao teu negócio, a ti ou à tua causa. Para começar, escolhe uma categoria de Página.
                    </span>
                    </div>
                </div>
                <div class="Cols gap-[20px]">
                    <div className="bg-white rounded-md shadow-md h-[440px] w-[450px] flex flex-col items-center p-[30px] border-[1px] border-gray-200"> 
                        <img src="/src/img/biz_illustration.png" alt="" className="w-[170px]" />
                        <div className="flex flex-col items-center p-[30px] gap-[8px]">
                            <h2 className="font-bold text-[18px]">
                                Negócio ou marca
                            </h2>
                            <span className="text-[14px] text-gray-400 text-center w-[380px] ">
                                Apresenta os teus produtos e serviços, destaca a tua marca e alcança mais clientes no Facebook.
                            </span>
                        </div> 
                        <div className="p-[50px] ">
                            <a href="" className="border-[0.1px] border-gray-200 bg-gray-100 p-[5px] text-gray-400 text-sm flex flex-col w-[85px] justify-center items-center h-[25px]" >
                                Começar
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-md shadow-md h-[440px] w-[450px] flex flex-col items-center p-[30px] border-[1px] border-gray-200"> 
                        <img src="/src/img/community_illustration.png" alt="" className="w-[170px]" />
                        <div className="flex flex-col items-center p-[30px] gap-[8px]">
                            <h2 className="font-bold text-[18px] mt-[8px] ">
                                Comunidade ou figura pública
                            </h2>
                            <span className="text-[14px] text-gray-400 text-center w-[400px]">
                                Entra em contacto e partilha com pessoas na tua comunidade, organização, equipa, grupo ou clube..
                            </span>
                        </div> 
                        <div className="p-[50px] ">
                            <a href="" className="border-[0.1px] border-gray-200 bg-gray-100 p-[5px] text-gray-400 text-sm flex flex-col w-[85px] justify-center items-center h-[25px]  " >
                                Começar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewPage;