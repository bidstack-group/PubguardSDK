function extractAllTags() {
    
    var itmes = document.getElementsByTagName("*");
    
    var tags = [];

    for (var i=0; i < itmes.length; i+=1) {
         
        tags.push( itmes[i].tagName );
    }
    
    return tags;
}

extractAllTags();
