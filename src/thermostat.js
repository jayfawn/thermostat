function Thermostat() {
  this.temperature = 20
  this.powerSaving = true
}

Thermostat.prototype._maxTemp = function () {
  return (this.powerSaving ? 25 : 32)
}

Thermostat.prototype.up = function(number) {
  if (this.temperature + number > this._maxTemp()) {
    this.temperature = this._maxTemp()
  } else {
    this.temperature += number
  }
}

Thermostat.prototype.down = function(number) {
  if (this.temperature - number < 10) {
    this.temperature = 10
  } else {
    this.temperature -= number
  }
}

Thermostat.prototype.switchPowerSaving = function () {
  this.powerSaving ^= true
};
