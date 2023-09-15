(function () {
    const inPut = document.getElementsByTagName('input')[0];
    const fileReader = new FileReader();

    fileReader.onloadend = () => {
        const base64 = fileReader.result.replace(/^data:image\/png;base64,/, '');

        console.log(inPut.files[0]);
        console.log(base64);
    };

    inPut.addEventListener('change', () => {fileReader.readAsDataURL(inPut.files[0])});
})();