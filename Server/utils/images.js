export const getFiles = (file) => {
    const filePath = file.path;
    const fileSplit = filePath.split("\\");
    const fileComplete = fileSplit[1] + "/"+ fileSplit[2];

    return fileComplete;
}
