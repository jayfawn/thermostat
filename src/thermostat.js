function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;

  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true
}

Thermostat.prototype.up = function() {
  if (this.isMaxTemperature()) {
    return;
  }
  this.temperature += 1
}

Thermostat.prototype.down = function() {
  if (this.isMinTemperature()) {
    return;
  }
  this.temperature -= 1
}

Thermostat.prototype.turnPowerSavingOn = function () {
  if(this.temperature > this.MAX_TEMP_PSM_ON) {
    this.temperature = this.MAX_TEMP_PSM_ON
  }
  this.powerSavingMode = true
};

Thermostat.prototype.turnPowerSavingOff = function () {
  this.powerSavingMode = false
}

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.energyUsage = function () {
  if (this.temperature < 18) {
    return 'low-usage'
  } else if (this.temperature < 25) {
    return 'medium-usage'
  } else {
    return 'high-usage'
  }
}

Thermostat.prototype.isMaxTemperature = function() {
  let maxTemp;
  if (this.powerSavingMode === true) {
    maxTemp = this.MAX_TEMP_PSM_ON;
  } else {
    maxTemp = this.MAX_TEMP_PSM_OFF;
  }

  return this.temperature >= maxTemp;
}

Thermostat.prototype.isMinTemperature = function () {
  return this.temperature <= this.MINIMUM_TEMPERATURE
}
