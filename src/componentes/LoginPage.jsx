///sobre a parte de responsabilidade... tailwind/sass?

function LoginPage () {
    return (
        <div class="flex justify-center items-center w-screen h-screen flex-col md:flex-row">
            <div className="flex flex-col justify-center items-center text-center md:text-left md:mr-28 md:mb-36 gap-1 py-10">
                <div className="w-400">
                    <h1 id="facebook"  className="">
                        facebook
                    </h1>
                </div>
                <div id="facebook-title" className="w-400 font-normal text-sm">
                    <h2 className="md:text-2xl">
                        O Facebook ajuda-te a comunicar e a partilhar com as pessoas que fazem parte da tua vida.
                    </h2>
                </div>        
            </div>
            <div className="header-contents">
                <form className="bg-white m-auto w-400 h-320 md:w-370 md:h-350 rounded-md shadow-xl flex justify-center items-center" action="">
                    <div className="flex flex-col w-370 items-center gap-3 md:w-340">
                        <input className="input-components w-full" type="email" name="" id="" placeholder="E-mail ou número do telémovel" />
                        <input className="input-components w-full" type="password" name="" id="" placeholder="Palavra-passe" />
                        <a id="BotaoIniciar" className="md:w-full w-full rounded-md h-11 text-white font-bold text-xl flex justify-center items-center  " type="submit">Iniciar sessão</a>
                        <a  className="text-blue-600 hover:underline " href="/passwordrecovery">
                            Não sabes a tua palavra-passe?
                        </a>
                        	<div class="button" className="border-t-[1px] w-full text-base text-center flex justify-center  md:mb-4">
                                <a id="BotaoCriarNovaConta" href="registeraccount"   class="h-12 flex justify-center items-center mt-4 w-40 font-bold md:mt-10 rounded-md text-white">Criar nova conta</a>
                            </div>
                    </div>
                </form>

                <div id="contents-p" className="flex text-center md:text-3xl mt-5 gap-1 ">
                    <a className="font-bold  md:text-[13.5px] hover:underline ml-2" href="newpage">
                        Cria uma Página
                    </a>
                    <p className="md:text-[13.7px]">
                        para uma celebridade, marca ou empresa.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;