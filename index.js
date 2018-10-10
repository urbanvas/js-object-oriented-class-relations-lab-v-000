let store = {drivers: []}

class Driver {
  constructor (name, id) {
    this.name = name
    this.id = id
    store.drivers.push(this)
  }
}
