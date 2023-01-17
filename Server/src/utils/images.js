export const getFiles = (file, nombre) => {
    const filePath = file.path;
     const fileSplit = filePath.split("\\");
    const fileComplete = fileSplit[2] + "/"+ fileSplit[3];
    console.log(fileComplete);
    return fileComplete;
}

export const getPDF = (file, nombre) => {
    const filePath = file.path;
    const fileSplit = filePath.split("\\");
    const fileComplete = fileSplit[1] + "/"+ nombre + ".pdf";

    return fileComplete;
}

