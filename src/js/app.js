import * as ui from './modules/ui.js'
import * as item from './modules/item.js'
import * as storage from './modules/storage.js'

const App = () => {
	// input
	const input = ui.getFields()

	// add submit
	const addSubmit = () => {
		if (input.name.value !== '' && input.money.value !== '' && input.category.selectedIndex !== 0) {
			// select category
			const selectedCategory = ui.selectCategory()
			const category = ui.checkCategory(selectedCategory)
			// add item to data strucutre
			const newItem = item.addItem(input.name.value, input.money.value, category,selectedCategory)
			// add item to UI
			ui.addItem(newItem)
			// get total money
			const totalMoney = item.getTotalMoney()
			// show current money in UI
			ui.showCurrentMoney(totalMoney)
			// calculate percent
			ui.calculatePercent(totalMoney)
			// clear fields
			ui.clearFields(input)
			// set new item to local storage
			storage.setCookies(newItem)
		}
	}
	// edit submit
	const editSubmit = e => {
		if (e.target.matches('.fa-pencil')) {
			
			const listID = e.target.closest('li').id
			const id = parseInt(listID)
			// get item by ID
			const itemToUpdate = item.getElementByID(id)
			// set current Item
			item.setCurrentItem(itemToUpdate)
			// add item to Fields
			ui.addItemToForm(input)
			// hide edit state
			ui.editState('none', 'inline')
		}
	}
	// update submit
	const updateSubmit = () => {
		if (input.name.value !== '' && input.money.value !== '' && input.category.selectedIndex !== 0) {
			// select category
			const selectedCategory = ui.selectCategory()
			const category = ui.checkCategory(selectedCategory)
			// update item in data structure
			const updatedItem = item.updateItem(input.name.value, input.money.value, category)
			// update item in UI
			ui.updateUI(updatedItem)
			// const get total money
			const totalMoney = item.getTotalMoney()
			// show current money in UI
			ui.showCurrentMoney(totalMoney)
			// calculate percent
			ui.calculatePercent(totalMoney)
			// hide edit state
			ui.editState('inline', 'none')
			// update cookies in local storage
			storage.updateCookies(updatedItem)
			// clear fields
			ui.clearFields(input)
		}
	}
	// delete submit
	const deleteSubmit = () => {
		// get current item
		const currentItem = item.currentItem()
		// delete selected item form data structure
		item.deleteItem(currentItem.id)
		// delete item from UI
		ui.deleteItem(currentItem.id)
		// const get total money
		const totalMoney = item.getTotalMoney()
		
		// show current money in UI
		ui.showCurrentMoney(totalMoney)
		// calculate percent
		ui.calculatePercent(totalMoney)
		// hide edit state
		ui.editState('inline', 'none')
		// clear fields
		ui.clearFields(input)
		// delete cookies from local storage
		storage.deleteCookies(currentItem.id)
	}
	// delete all submit
	const removeAllSubmit = () => {
		// remove all items from data structure
		item.removeItems()
		// remove all UI items
		ui.removeItemsUI()
		// const get total money
		const totalMoney = item.getTotalMoney()
		console.log(totalMoney);
		// show current money in UI
		ui.showCurrentMoney(totalMoney)
		// calculate percent
		ui.calculatePercent(totalMoney)
		// remove all from local storage
		storage.removeLocalStorage()
		// log data
		const logData = item.logData()
		console.log(logData)
	}

	// back submit
	const backSubmit = () => {
		// hide edit state
		ui.editState('inline', 'none')
		// clear fields
		ui.clearFields(input)
	}
	// event listeners
	const loadEventListeners = () => {
		// get UISelectors
		const UISelectors = ui.getSelectors()
		// add event listener
		const addBtn = document.querySelector(UISelectors.addBtn)
		addBtn.addEventListener('click', addSubmit)
		// edit event listener
		const editBtn = document.querySelector(UISelectors.ulList)
		editBtn.addEventListener('click', editSubmit)
		// update event listener
		const updateBtn = document.querySelector(UISelectors.updateBtn)
		updateBtn.addEventListener('click', updateSubmit)
		// delete event listener
		const deleteBtn = document.querySelector(UISelectors.deleteBtn)
		deleteBtn.addEventListener('click', deleteSubmit)
		// remove event listener
		const removeBtn = document.querySelector(UISelectors.removeBtn)
		removeBtn.addEventListener('click', removeAllSubmit)
		// back event listener
		const backBtn = document.querySelector(UISelectors.backBtn)
		backBtn.addEventListener('click', backSubmit)
		// show history
		const burgerBtn = document.querySelector('.transaction__burger')
		burgerBtn.addEventListener('click', ui.showTransactions)
	}

	// init
	const init = () => {
		// get items from data structure
		const items = item.getItems()
		// populate item
		ui.populateItems(items)
		// const get total money
		const totalMoney = item.getTotalMoney()
		// show current money in UI
		ui.showCurrentMoney(totalMoney)
		// calculate percent
		ui.calculatePercent(totalMoney)
		// hide edit state
		ui.editState('inline', 'none')
	}

	loadEventListeners()
	init()
}

// App()
window.addEventListener('DOMContentLoaded',App)