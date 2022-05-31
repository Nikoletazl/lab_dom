function extractText() {
    const items = Array.from(document.querySelectorAll('li'))
    result = items.map(e => e.textContent).join('\n');

    document.getElementById('result').value = result

}