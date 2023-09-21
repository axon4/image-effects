(async function () {
	let rust;

	try {
		rust = await import('../pkg');
	} catch (error) {
		console.error(error);

		return;
	};

	const inPut = document.getElementsByTagName('input')[0];
	const fileReader = new FileReader();

	fileReader.onloadend = () => {
		const base64 = fileReader.result.replace(/^data:image\/png;base64,/, '');
		const dataURL = rust.greyscale(base64);

		document.getElementsByTagName('img')[0].src = dataURL;
	};

	inPut.addEventListener('change', () => {fileReader.readAsDataURL(inPut.files[0])});
})();