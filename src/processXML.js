

export const processXML = (xml) => {

    const measures = [...xml.getElementsByTagName("measure")]


    let dummyResults;

    let notes, node;
    for (let measure of measures){
        notes = [...measure.getElementsByTagName("note")];
        dummyResults = Array.from({length: notes.length}, () => Math.random())

        for (let [i, note] of Object.entries(notes)){
            

            node = document.createElement("notehead");
            node.innerText = "normal";
            
            node.setAttribute("color", dummyResults[i] > 0.7 ? "#FF0000" : "#000000")
            
            note.appendChild(node)
            
        }
        
    }
    return (new XMLSerializer).serializeToString(xml);
    
}