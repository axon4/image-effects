use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::decode;
use image::load_from_memory;

#[wasm_bindgen]
pub fn greyscale(encoded_image: &str) {
	log(&"greyScale called".into());

	let base64_to_vector = decode(encoded_image).unwrap();
	log(&"image deCoded".into());

	let mut image = load_from_memory(&base64_to_vector).unwrap();
	log(&"image loaded".into());

	image = image.grayscale();
	log(&"image greyScaled".into());
}