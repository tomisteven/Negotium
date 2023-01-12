export const getFiles = (file, nombre) => {
    const filePath = file.path;
    const fileSplit = filePath.split("\\");
    const fileComplete = fileSplit[1] + "/"+ fileSplit[2];

    return fileComplete;
}

export const getPDF = (file, nombre) => {
    const filePath = file.path;
    const fileSplit = filePath.split("\\");
    const fileComplete = fileSplit[1] + "/"+ nombre + ".pdf";

    return fileComplete;
}

