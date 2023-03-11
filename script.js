var container = document.getElementsByClassName("form-wrap")[0];
container.onkeyup = function (e) {
    var target = e.srcElement;
    var maxLength = parseInt(target.attributes["maxlength"].value, 4);
    var myLength = target.value.length;
    if (myLength >= maxLength) {
        var next = target;
        while (next = next.nextElementSibling) {
            if (next == null)
                break;
            if (next.tagName.toLowerCase() == "input") {
                next.focus();
                break;
            }
        }
    }
    
    if (e.key == 'Backspace') {
        var prev = target;
        while (prev = prev.previousElementSibling) {
            if (prev == null)
                break;
            if (prev.tagName.toLowerCase() == "input") {
                prev.focus();
                break;
            }
        }
            
    }
}

