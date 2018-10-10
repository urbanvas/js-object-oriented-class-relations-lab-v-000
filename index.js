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
    return store.passengers.filter(function (passenger) {
        debugger
        return passenger.id === this.passengerId
      }.bind(this)
    )
  }
}
