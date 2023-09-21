use wasm_bindgen::prelude::wasm_bindgen;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn greyscale(encoded_string: &str) {
	log(&encoded_string.into());
}