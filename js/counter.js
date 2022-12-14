window.addEventListener('click', e => {
	let counter

	if (
		e.target.dataset.action === 'plus' ||
		e.target.dataset.action === 'minus'
	) {
		const counterWrapper = e.target.closest('.counter-wrapper')
		counter = counterWrapper.querySelector('[data-counter]')
	}

	// Проверка элемента ('plus')
	if (e.target.dataset.action === 'plus') {
		counter.innerText = ++counter.innerText
	}

	// Проверка элемента ('minus')
	if (e.target.dataset.action === 'minus') {
		if (parseInt(counter.innerText) > 1) {
			counter.innerText = --counter.innerText
		} else if (
			// Проверка на товар который находится в корзине

			e.target.closest('.cart-wrapper') &&
			parseInt(counter.innerText) === 1
		) {
			e.target.closest('.cart-item').remove()
		}
	}
})
