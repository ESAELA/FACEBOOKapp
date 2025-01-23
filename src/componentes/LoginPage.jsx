///sobre a parte de responsabilidade... tailwind/sass?

function LoginPage () {
    return (
        <div className="contents" class="flex justify-center w-screen h-screen items-center flex-col md:flex-row">
            <div className="header-contents text-center md:text-left">
                    <h1 id="facebook">
                        facebook
                    </h1>
                    <h2 className=" ">
                        O Facebook ajuda-te a comunicar e a partilhar com as pessoas que fazem parte da tua vida.
                    </h2>
            </div>
            <div className="header-contents">
                <form className="bg-white md:w-370 md:h-350 rounded-md shadow-lg flex justify-center items-center" action="">
                    <div className="flex flex-col items-center gap-3 md:w-340">
                        <input className="input-components" type="email" name="" id="" placeholder="E-mail ou número do telémovel" />
                        <input className="input-components" type="password" name="" id="" placeholder="Palavra-passe" />
                        <a id="BotaoIniciar" className="w-full rounded-md h-11 text-white font-bold text-xl flex justify-center items-center  " type="submit">Iniciar sessão</a>
                        <a  className="text-blue-600 hover:underline " href="/passwordrecovery">
                            Não sabes a tua palavra-passe?
                        </a>
                        	<div class="button" className="border-t-[1px] w-full text-base text-center mt-[11px] flex justify-center p-[5px] ">
                                <a id="BotaoCriarNovaConta" href="registeraccount"   class="h-12 flex justify-center items-center w-[160px] font-bold mt-4 rounded-md text-white">Criar nova conta</a>
                            </div>
                    </div>
                </form>

                <div className="flex text-center">
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