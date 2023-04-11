function make_first_half_bold(word) {
  if (word.length < 2) {
    return word;
  }
  var half_length = Math.ceil(word.length / 2);
  var first_half = word.slice(0, half_length);
  var second_half = word.slice(half_length);
  return '<b>' + first_half + '</b>' + second_half;
}

function bold_text_nodes(nodes) {
  nodes.forEach(function(node) {
    if (node.nodeType === 3) {
      var parent = node.parentNode;
      if (parent.nodeName !== 'SCRIPT' && parent.nodeName !== 'STYLE') {
        var words = node.textContent.split(' ');
        var new_words = words.map(make_first_half_bold);
        var new_html = new_words.join(' ');
        var new_node = document.createElement('span');
        new_node.innerHTML = new_html;
        parent.replaceChild(new_node, node);
      }
    } else if (node.nodeType === 1 && node.nodeName !== 'SCRIPT' && node.nodeName !== 'STYLE') {
      bold_text_nodes(node.childNodes);
    }
  });
}

bold_text_nodes(document.body.childNodes);

/*
This code does the following:

It walks the DOM tree of the webpage recursively, starting from the root element of the page (document.body).
For each text node it encounters (nodeType === 3), it checks whether the node's parent is a <script> or <style> element, in which case it skips the node.
For each text node that's not inside a <script> or <style> element, it splits its text content into an array of words, applies the make_first_half_bold function to each word, and joins the resulting array back into a string of HTML.
It creates a new <span> element, sets its innerHTML to the bolded text, and replaces the original text node with the new <span> element.
This way, the bolded text is inserted back into the page structure, but without
affecting any images or other non-text elements.
*/ 