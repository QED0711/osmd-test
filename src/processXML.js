

export const processXML = (xml) => {

    const measures = [...xml.getElementsByTagName("measure")]


    let notes, node;
    for (let measure of measures){
        notes = [...measure.getElementsByTagName("note")];

        for (let note of notes){
            node = document.createElement("notehead");
            node.innerText = "normal";

            node.setAttribute("color", "#FF0000")
            note.appendChild(node)
        }
        
    }
    return (new XMLSerializer).serializeToString(xml);
    
}