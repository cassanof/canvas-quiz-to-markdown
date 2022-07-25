chrome.runtime.sendMessage({ 
    message: "get_name"
}, response => {
    if (response.message === 'success') {
        document.querySelector('div').innerHTML = `Hello from options ${response.payload}`;
    }
});
