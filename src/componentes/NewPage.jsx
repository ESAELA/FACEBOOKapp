

function NewPage () {
    return (
        <div className="w-screen h-screen bg-gray-300">
            <div className="w-[1020px]">
                <nav id="navbar" className="flex items-center  justify-center text-white w-full h-[87px]">

                </nav>
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
            </div>

                <div class="flex">
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
    )
}
export default NewPage;