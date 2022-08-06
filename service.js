function go(s){
	chrome.tabs.create({url: "https://translate.google.com/?sl=auto&tl=en&op=translate&text=" + encodeURIComponent(s.selectionText)})
}

chrome.contextMenus.removeAll(function() {
	chrome.contextMenus.create({
		id: "1",
		title: "Translate",
		contexts:["selection"],
	})
})

chrome.contextMenus.onClicked.addListener(go);