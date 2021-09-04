export const fillNoteColor = (note, color) => {
    const cls = note.classList.value;

    if (cls === "vf-notehead") {
        note.querySelector("path").setAttribute("fill", color)
    } else if (cls === "vf-tabnote") {
        for (let rect of note.querySelectorAll("rect")) {
            rect.setAttribute("fill", color)
        }
    }
}