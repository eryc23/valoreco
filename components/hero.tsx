export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 text-center items-center justify-center flex flex-col" data-aos="zoom-y-out">
              <svg className="w-80 h-80" width="995" height="1428" viewBox="0 0 995 1428" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M366.768 1135.26V649.066H337.5H273.5H243.823V1135.26H366.768Z" fill="#333333" />
                <path d="M2.8943 1135.26V936.87L103.486 988.563V1135.26H2.8943Z" fill="#333333" />
                <path d="M791 1135V730H765.289H709.069H683V1135H791Z" fill="#333333" />
                <path d="M918.955 551.269V1135.26H877.042V595.976L918.955 551.269Z" fill="#333333" />
                <path d="M995 779V1135H964V797.903L995 779Z" fill="#333333" />
                <path d="M162.164 778.997V1135.26H192.901V804.528L162.164 778.997Z" fill="#333333" />
                <path d="M117.457 735.687V1135.26H148.193V755.939L117.457 735.687Z" fill="#333333" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M487.952 1140.85H548.027L541.042 670.023L663.987 523.327C827.448 526.121 891.715 407.367 805.094 322.144C880.446 213.412 795.315 136.329 663.987 136.329C682.149 -10.3669 483.76 -74.6337 392.948 129.344C338.461 81.842 258.826 122.358 250.444 208.979C198.751 248.098 180.597 316.278 240.664 385.014C193.162 440.898 260.52 516.624 404.125 533.107L501.923 670.023L487.952 1140.85ZM626.265 523.327L549.424 609.948V505.165C575.987 517.231 593.904 519.63 626.265 523.327ZM506.114 481.414L475.378 461.855C463.4 498.052 454.605 514.489 427.876 523.327L496.334 605.756L506.114 481.414Z" fill="#017374" />
                <path d="M992.045 1159.01H0.100098L76.9409 1276.37H915.204L992.045 1159.01Z" fill="#017374" />
                <path d="M123.045 1312.69C389.892 1488.73 660.931 1441.22 853.731 1312.69H123.045Z" fill="#017374" />
              </svg>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#333333] to-[#017374]">ValorEco</span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                Bem-vindo ao ValorEco, onde a construção sustentável encontra a rentabilidade. Nós acreditamos que é possível criar projetos de qualidade enquanto protegemos o meio ambiente. Nossa missão é promover uma abordagem responsável para o gerenciamento de resíduos na indústria da construção civil e nas empresas terceirizadas que oferecem esses serviços. Estamos comprometidos em transformar resíduos em recursos valiosos, gerando lucros e contribuindo para um futuro mais verde.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}