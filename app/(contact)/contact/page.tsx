export const metadata = {
  title: 'Contato - ValorEco',
  description: 'Entre em contato conosco',
}

import Link from 'next/link'

export default function Contact() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Entre em Contato</h1>
            <p className="text-gray-600 mt-3">Estamos aqui para responder às suas perguntas e fornecer informações adicionais sobre nossos serviços.</p>
          </div>
          <div className="max-w-xl mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="first-name">Nome <span className="text-red-600">*</span></label>
                  <input id="first-name" type="text" className="form-input w-full text-gray-800" placeholder="Primeiro nome" required />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="last-name">Sobrenome <span className="text-red-600">*</span></label>
                  <input id="last-name" type="text" className="form-input w-full text-gray-800" placeholder="Sobrenome" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="contato">Contato <span className="text-red-600">*</span></label>
                  <input id="contato" type="phone" className="form-input w-full text-gray-800" placeholder="Informe seu contato. Ex: 85 99999-9999" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Digite seu endereço de email" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="message">Mensagem <span className="text-red-600">*</span></label>
                  <textarea id="message" name="message" rows={4} className="form-input w-full text-gray-800"></textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-teal-600 hover:bg-teal-700 w-full">Enviar</button>
                </div>
              </div>
            </form>
            <div className="text-sm text-gray-500 text-center mt-3">
              Ao enviar este formulário, você concorda com os <a className="underline" href="#0">termos e condições</a> e a nossa <a className="underline" href="#0">política de privacidade</a>.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
