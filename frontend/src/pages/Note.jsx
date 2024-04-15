import React from "react";


function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("pt-Br")

    return (

        <div className="max-w-60 max-h-fit shadow-xl bg-zinc-600 rounded-xl flex flex-col items-center justify-between space-y-4 p-5">
            <p className="text-xl text-zinc-300">{note.title}</p>
            <p className="text-sm text-zinc-300">{note.content}</p>
            <p className="text-xs text-zinc-300/70">{formattedDate}</p>
            <button className="w-40 p-1 rounded-[5px] bg-zinc-800 transition-all hover:bg-zinc-800/50" onClick={() => onDelete(note.id)}>Deletar</button>
        </div>

    )
}

export default Note