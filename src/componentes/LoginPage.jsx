

function LoginPage () {
    return (
        <div className="contents" class="flex justify-center items-center gap-[120px] ">
            <div className="header-contents">

                <div>
                    <img 
                     class="fb_logo _8ilh img w-64 gap-0 mb-[-12px]" src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="Facebook">
                    </img>
                
                <h2 className="w-[500px] ml-6">
                    O Facebook ajuda-te a comunicar e a partilhar com as pessoas que fazem parte da tua vida.
                </h2>

                </div>
            </div>
            <div className="header-contents">
                <form className="bg-white w-[370px] h-[327px] rounded-md shadow-lg mt-[115px] flex justify-center items-center" action="">
                    <div className="flex flex-col items-center gap-3">
                        <input className="h-12 border w-[330px] focus:outline-none  rounded-md border-gray-300 p-4 focus:border-solid focus:border-blue-600 focus:shadow-lg" type="email" name="" id="" placeholder="E-mail ou número do telémovel" />
                        <input className="h-12 border w-[330px] focus:outline-none rounded-md border-gray-300 p-4 focus:border-solid focus:border-blue-600 focus:shadow-lg" type="password" name="" id="" placeholder="Palavra-passe" />
                        <a id="BotaoIniciar" className=" w-[330px] rounded-md h-11 text-white font-bold text-xl flex justify-center items-center  " type="submit">Iniciar sessão</a>
                        <a  className="text-blue-600 hover:underline " href="/passwordrecovery">
                            Não sabes a tua palavra-passe?
                        </a>
                        	<div class="button" className="border-t-[1px] w-[360px] text-base text-center mt-[11px] flex justify-center p-[5px] ">
                                <a id="BotaoCriarNovaConta" href="registeraccount"   class="h-12 flex justify-center items-center w-[160px] font-bold mt-4 rounded-md text-white">Criar nova conta</a>
                            </div>
                    </div>
                </form>
                <div className="flex mt-5 gap-1 text-center text-[13px] ml-3">
                    <a className="font-bold hover:underline" href="newpage">
                        Cria uma Página
                    </a>
                    <p>
                        para uma celebridade, marca ou empresa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;