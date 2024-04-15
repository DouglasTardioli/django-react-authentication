import React from "react"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "../components/ui/dialog"


import api from "../api"
import Note from "./Note"
import { DialogClose } from "@radix-ui/react-dialog"

function Home() {
    const [notes, setNotes] = useState([])
    const [content, setContent] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate();

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
            if (res.status === 204) console.log("note deleted!")
            else alert("Failed to delete note.")
            getNotes()
        }).catch((error) => alert({ "message": "Falha ao deletar" }))
    }

    const createNote = (e) => {
        e.preventDefault()
        api.post("/api/notes/", { content, title }).then((res) => {
            if (res.status === 201) console.log("Note Created!")
            else alert("Failed to make note.")
            getNotes()
        }).catch((err) => alert(err))
    }

    const handleLogout = () => {
        navigate("/login");
    }


    return (
        <div className="flex pb-20 items-center justify-center flex-col">
            <button onClick={handleLogout} className="transition-all absolute top-10 right-1/4">
                <img src="./logout.svg" alt="" className="w-6 h-6" />
            </button>
            <div className="m-16 space-y-4 flex items-center justify-center flex-col">
                <h2 className="text-3xl">Notas</h2>

                <div className="flex flex-wrap gap-8">
                    {notes.map((note) => (
                        <Note note={note} onDelete={deleteNote} key={note.id} />
                    ))}

                </div>
            </div>




            <Dialog>
                <DialogTrigger className="w-40 h-10 text-zinc-100 hover:bg-green-600/70 bg-green-600 rounded-xl">Crie uma Nota</DialogTrigger>
                <DialogContent className="bg-zinc-500 border-none flex items-center justify-center flex-col text-zinc-100 w-fit">
                    <DialogHeader className="flex items-center justify-center">
                        <DialogTitle>Crie sua nota aqui</DialogTitle>
                        <DialogDescription >
                            <form onSubmit={createNote} className="flex items-center justify-center flex-col  w-60">
                                <label htmlFor="title" className="text-xl mb-2">Título: </label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    className="bg-zinc-100 text-zinc-900 mb-4 rounded-[5px] outline-none px-2 py-1 w-full"
                                />
                                <label htmlFor="content" className="text-xl mb-2">Conteudo: </label>
                                <textarea
                                    name="content"
                                    id="content"
                                    required
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="bg-zinc-100 mb-4 text-zinc-900  rounded-[5px] px-2 py-1 w-full outline-none h-40 resize-none"
                                ></textarea>

                                <DialogClose><input type="submit" className="w-60 text-sm text-zinc-900 bg-zinc-100 rounded-[5px] p-1 cursor-pointer hover:bg-zinc-100/70 " value="Criar" /></DialogClose>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    )
}

export default Home