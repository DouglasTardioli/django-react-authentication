import { useEffect, useState } from "react"
import api from "../api"
import Note from "./Note"

function Home() {
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")

    useEffect(() => {
        getNotes()
    }, [])

    const getNotes = () => {
        api.get("/api/notes/")
            .then((res) => res.data)
            .then((data) => { setNotes(data); console.log(data) })
            .catch((err) => alert(err))
    }

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`).then((res) => {
            if (res.status === 204) alert("note deleted!")
            else alert("Failed to delete note.")
            getNotes()
        }).catch((error) => alert(error))
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", { content, title }).then((res) => {
            if (res.status === 201) alert("Note Created!")
            else alert("Failed to make note.")
            getNotes()
        }).catch((err) => alert(err))
    }

    return (
        <div className="flex pb-20 items-center justify-center flex-col">
            <div className="m-16 space-y-4 flex items-center justify-center flex-col">
                <h2 className="text-3xl">Notas</h2>
                <div className="flex flex-wrap gap-8">
                    {notes.map((note) => (
                        <Note note={note} onDelete={deleteNote} key={note.id} />
                    ))}
                </div>
            </div>

            <h2 className="text-3xl mb-4">Criar uma nota</h2>
            <form onSubmit={createNote} className="flex items-center justify-center flex-col  w-60">
                <label htmlFor="title" className="text-xl mb-2">Título: </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-zinc-500 mb-4 rounded-md outline-none px-2 py-1 w-full"
                />
                <label htmlFor="content" className="text-xl mb-2">Conteudo: </label>
                <textarea
                    name="content"
                    id="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="bg-zinc-500 mb-4 rounded-md px-2 py-1 w-full outline-none h-40 resize-none"
                ></textarea>
                <input type="submit" className="w-full bg-zinc-500 rounded-md p-1 cursor-pointer hover:bg-zinc-500/70 " value="Criar" />
            </form>
        </div>
    )
}

export default Home