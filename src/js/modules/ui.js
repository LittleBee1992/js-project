import * as item from './item.js'
// UI Selectors
const UISelectors = {
	ulList: '.transaction-list',
	liList: '.transaction',
	inputName: '#item-name',
	inputMoney: '#item-money',
	addBtn: '.add-btn',
	updateBtn: '.update-btn',
	deleteBtn: '.delete-btn',
	backBtn: '.back-btn',
	totalMoney: '.total__cash',
	category: '#category',
	removeBtn: '.btn-remove',
	svg: 'svg',
	totalPercent: '.total__percent',
}
//  populate items
const populateItems = items => {
	const ulList = document.querySelector(UISelectors.ulList)
	items.forEach(item => {
		const li = document.createElement('li')
		li.classList.add('transaction')
		li.setAttribute('id', item.id)
		li.innerHTML = `<p class="transaction-name"><i class="${item.category}"></i>${item.name}</p>
            <p class="transaction-amount">${item.money}zł <button class="edit"><i class="fa fa-pencil"></i></button></p>`
		item.money > 0 ? (li.lastChild.style.color = 'lime') : (li.lastChild.style.color = 'red')
		ulList.append(li)
	})
}
// add new item
const addItem = item => {
	const ulList = document.querySelector(UISelectors.ulList)
	const li = document.createElement('li')
	li.classList.add('transaction')
	li.setAttribute('id', item.id)
	li.innerHTML = `<p class="transaction-name"><i class="${item.category}"></i>${item.name}</p>
    <p class="transaction-amount">${item.money}zł <button class="edit"><i class="fa fa-pencil"></i></button></p>`

	item.money > 0 ? (li.lastChild.style.color = 'lime') : (li.lastChild.style.color = 'red')
	ulList.append(li)
}
// update item
const updateUI = item => {
	const liList = document.querySelectorAll(UISelectors.liList)

	liList.forEach(el => {
		if (el.id == item.id) {
			el.innerHTML = `<p class="transaction-name"><i class="${item.category}"></i>${item.name}</p><p class="transaction-amount">${item.money}zł <button class="edit"><i class="fa fa-pencil"></i></button></p>`

			item.money > 0 ? (el.lastChild.style.color = 'lime') : (el.lastChild.style.color = 'red')
		}
	})
}
// calculate percent money
const calculatePercent = item => {
	// get svg form
	const svg = document.querySelector(UISelectors.svg)
	// get circle stats
	const circle = svg.lastChild.previousElementSibling
	// get total percent text
	const totalPercent = document.querySelector(UISelectors.totalPercent)
	// calculate percent
	const percent = parseInt((item / 1000000) * 100)

	let data = 0

	totalPercent.textContent = `0%`
	circle.style.cssText = `--percent: 0 `
	circle.attributes.stroke.value = ''
	// counter percent
	const countPercent = () => {
		if (data < percent) {
			
			data++
			
			totalPercent.textContent = `${data}%`
			circle.style.cssText = `--percent: ${data}`
			circle.attributes.stroke.value = 'lime'
			if (data >= percent) {
				data = percent
				clearInterval(counts)
			} else if (data >= 100) {
				data = 100
				clearInterval(counts)
			}
		} else if (data > percent) {
			totalPercent.textContent = `${data}%`
			circle.style.cssText = `--percent: ${data}`
			data--
			circle.attributes.stroke.value = 'red'
			if (data <= percent) {
				data = percent
				clearInterval(counts)
			} else if (data <= -100) {
				data = -100
			}
			
		}

		circle.style.cssText = `--percent: ${data}`
		totalPercent.textContent = `${data}%`

	
	}

	let counts = setInterval(countPercent, 20)
}
// delete item
const deleteItem = id => {
	const item = document.getElementById(id)

	item.remove()
}
// remove all items from UI
const removeItemsUI = () => {
	document.querySelector(UISelectors.ulList).textContent = ''
}
// select category
const selectCategory = () => {
	const category = document.querySelector(UISelectors.category)
	const selectedCategory = category.options[category.selectedIndex].text
	
	return selectedCategory
}
// check category options
const checkCategory = category => {
	let categoryIcon
	switch (category) {
		case '[ + ] Incomes':
			categoryIcon = 'fas fa-money-bill-wave'
			break
		case '[ - ] Home':
			categoryIcon = 'fa-solid fa-house'
			break
		case '[ - ] Entertaiment':
			categoryIcon = 'fas fa-film'
			break
		case '[ - ] Shopping':
			categoryIcon = 'fas fa-cart-arrow-down'
			break
	}
	return categoryIcon
}

// fill item to update fields
const addItemToForm = input => {
	input.name.value = item.currentItem().name
	input.money.value = item.currentItem().money
}
// show current Money + counter
const showCurrentMoney = (money) => {
	// document.querySelector(UISelectors.totalMoney).textContent = money + '$'

	const totalMoney = document.querySelector(UISelectors.totalMoney)
	
	
	let data = 0
	let speed = parseInt(money / 100)

	const counter = () => {
		if (money > 0) {
			data += speed
			totalMoney.textContent = data + '$'
			if (data >= money) {
				totalMoney.textContent = money + '$'
				clearInterval(counts)
			}
		} else {
			data -= -speed
			totalMoney.textContent = data + '$'

			if (data <= money) {
				totalMoney.textContent = money + '$'
				clearInterval(counts)
			}
		}
	}
	let counts = setInterval(counter, 10)
}

// get inputs
const getFields = () => {
	const name = document.querySelector(UISelectors.inputName)
	const money = document.querySelector(UISelectors.inputMoney)
	const category = document.querySelector(UISelectors.category)

	return {
		name,
		money,
		category,
	}
}
// clear fields
const clearFields = input => {
	input.name.value = ''
	input.money.value = ''
	input.category.selectedIndex = 0
}
// get all selectors
const getSelectors = () => {
	return UISelectors
}
// edist state controller
const editState = (inline, none) => {
	document.querySelector(UISelectors.addBtn).style.display = inline
	document.querySelector(UISelectors.updateBtn).style.display = none
	document.querySelector(UISelectors.deleteBtn).style.display = none
	document.querySelector(UISelectors.backBtn).style.display = none
}
// show transaction history
const showTransactions = () => {
	const transactions = document.querySelector('.transactions')
	transactions.classList.toggle('active')
}

export {
	showTransactions,
	populateItems,
	getSelectors,
	addItem,
	getFields,
	showCurrentMoney,
	clearFields,
	editState,
	selectCategory,
	checkCategory,
	addItemToForm,
	updateUI,
	deleteItem,
	removeItemsUI,
	calculatePercent,
}
