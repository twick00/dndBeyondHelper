import { transformHtmlToMarkdown } from './markdown'

const recalculateMarkdownForElement = (element: Element) => {
	transformHtmlToMarkdown(element)
};

const observer = new MutationObserver(mutations =>
	mutations.forEach(mutation => {
		mutation.addedNodes.forEach((node: any /*Node but actually Element*/) => {
			if (node.className === 'ct-primary-box__tab--notes ct-tab-list__item') {
				const n: Element = node;
				n.querySelectorAll('.ct-notes__note').forEach(element => {
					recalculateMarkdownForElement(element);
					const listener = () => {
						element.removeEventListener('DOMSubtreeModified', listener)
						recalculateMarkdownForElement(element);
						element.addEventListener('DOMSubtreeModified', listener)
					}
					element.addEventListener('DOMSubtreeModified', listener)
				})
			}
		})
	})
);
observer.observe(document.body, {
	subtree: true
});
