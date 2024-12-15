import Link from "next/link";

export default function sucessPage() {
  return (
    <div className="flex items-center justify-center h-screen">
        <h1 className="text-4xl">
            Formulario enviado con exito! 
        </h1>

        <Link href={"/"}>
            volver a enviar
        </Link>
    </div>
  )
}
