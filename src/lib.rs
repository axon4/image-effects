use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::{ encode, decode };
use image::load_from_memory;
use image::ImageOutputFormat::Png as PNG;

#[wasm_bindgen]
pub fn greyscale(encoded_image: &str) -> String {
	log(&"image received".into());

	let binary = decode(encoded_image).unwrap();
	log(&"image deCoded".into());

	let mut image = load_from_memory(&binary).unwrap();
	log(&"image loaded".into());

	image = image.grayscale();
	log(&"image greyScaled".into());

	let mut buffer = vec![];

	image.write_to(&mut buffer, PNG).unwrap();
	log(&"image buffered".into());

	let base64 = encode(buffer);
	let data_URL = format!("data:image/png;base64,{}", base64);

	data_URL
}