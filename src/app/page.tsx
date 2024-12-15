import { handleForm} from "./action"

export default function HomePage() {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-100'>
        <form action={handleForm} className="flex flex-col gap-y-6 bg-white p-6 rounded-lg shadow-lg w-full max-w-md">

        <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Enviar Correo
        </h1>

         <input
             name="title"
             type="text"
             placeholder="Título del Email"
             className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
           <input
             name="to_name"
             type="text"
             placeholder='Escriba el nombre'
             className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

           <input
             name="to_email"
             type="email"
             placeholder='Escribe tu Email'
             className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
           />

           <textarea
            name="content" 
            placeholder="Escriba el contenido del email"
            className="w-full bg-gray-50 border border-gray-300 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
           ></textarea>

           <button
            className="w-full bg-blue-500 text-white font-bold p-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-200"
            >Enviar</button>

        </form>

    </div>
  )
}
