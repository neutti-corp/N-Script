N.Page = function(pageId, objects){
    this.elem = jQuery("[data-r-id='"+pageId+"']")
    for(var i in objects){
        objects[i].page = this
    }
    window._NObjects = objects
    for(var i in objects){
        objects[i].generate()
    }
}