function pubguardDoExport() {
    
    var urls = [];
    const xpathQuery = "//a/@href | //applet/@codebase | //area/@href | //base/@href | //blockquote/@cite | //body/@background | //del/@cite | //form/@action | //frame/@src | //frame/@longdesc | //head/@profile | //iframe/@longdesc | //iframe/@src | //img/@longdesc | //img/@usemap | //input/@src | //input/@usemap | //ins/@cite | //object/@classid | //object/@codebase | //object/@data | //object/@usemap | //q/@cite | //img/@src | //link/@href | //source/@src | //embed/@src | //script/@src | //audio/@src | //button/@formaction | //command/@icon | //html/@manifest | //input/@formaction | //video/@poster | //video/@src";
    const xpathResult = document.evaluate(xpathQuery, document, null, XPathResult.ANY_TYPE);

    let currentItem = xpathResult.iterateNext();

    while (currentItem) {
        
      urls.push(currentItem.value);
        
      currentItem = xpathResult.iterateNext();
    }
    
    return urls;
}

pubguardDoExport();
