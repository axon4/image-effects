use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;
use base64::decode;

#[wasm_bindgen]
pub fn greyscale(encoded_image: &str) {
	log(&"greyScale called".into());

	let base64_to_vector = decode(encoded_image).unwrap();

	log(&"image deCoded".into());
}