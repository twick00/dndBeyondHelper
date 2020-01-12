import showdown from 'showdown'

export const mdConverter = new showdown.Converter()
export const transformHtmlToMarkdown = (element: Element) => {
	console.log(element)
	element.innerHTML = mdConverter.makeHtml(element.textContent)
	console.log(element)
}
