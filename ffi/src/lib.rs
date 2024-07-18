#[no_mangle]
pub extern "C" fn hello() -> *const u8 {
    "Hello from Rust!".as_ptr()
}
