function openInNewTab(url) {
  var win = window.open();
  win.document.body.style.margin = '0';
  win.document.body.style.height = '100vh';

  var icon = win.document.createElement('link')
  icon.rel = "shortcut icon"
  icon.href = "https://ssl.gstatic.com/classroom/favicon.png"
  icon.type = "image/png"
  win.document.head.appendChild(icon)

  var title = win.document.createElement('title')
  title.innerText = "Home"
  win.document.head.appendChild(title)

  var iframe = win.document.createElement('iframe');
  iframe.style.border = 'none';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.margin = '0';
  iframe.id = 'content';
  iframe.src = url;
  win.document.body.appendChild(iframe);
}
