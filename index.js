let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0
class Driver {
  constructor (name) {
    this.name = name
    this.id = ++driverId
    store.drivers.push(this)
  }
  trips () {
    return store.trips.filter(function (trip) {
      return this.id === trip.driverId
    }.bind(this))
  }
  passengers () {
    return store.passengers.filter(function (passenger) {
      debugger
      return this.id === trips.driverId
    }.bind(this))
  }
}
class Passenger {
  constructor (name) {
    this.name = name
    this.id = ++passengerId
    store.passengers.push(this)
  }
}
class Trip {
  constructor (driver, passenger) {
    this.driverId = driver.id
    this.passengerId = passenger.id
    this.id = ++tripId
    store.trips.push(this)
  }
  passenger () {
    return store.passengers.find(function (passenger) {
      return passenger.id === this.passengerId
    }.bind(this)
  )}
  driver () {
    return store.drivers.find(function (driver) {
      return driver.id === this.driverId
    }.bind(this)
  )}

}
