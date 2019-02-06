describe('Thermostat', function () {
  beforeEach(function () {
    thermostat = new Thermostat();
  })

  describe('#defaults', function () {
    it('starts at 20 degrees', function () {
      expect(thermostat.temperature).toEqual(20)
    })

    it('has power saving mode on', function () {
      expect(thermostat.powerSavingMode).toEqual(true)
    })
  })

  describe('#up/#down', function () {
    it('increases in temperature', function () {
      thermostat.up()
      expect(thermostat.temperature).toEqual(21)
    })

    it('decreases in temperature', function() {
      thermostat.down()
      expect(thermostat.temperature).toEqual(19)
    })

    it('cannot go lower than 10 degrees', function () {
      for (var i = 0; i < 11; i++) {
        thermostat.down()
      }
      expect(thermostat.temperature).toEqual(10)
    })
  })

  describe('#powerSavingMode', function () {
    it('when power saving is on, cannot go above 25 degrees', function () {
      thermostat.turnPowerSavingOn()
      for (var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(25)
    })

    it('when power saving is off, cannot go above 32 degrees', function () {
      thermostat.turnPowerSavingOff()
      for (var i = 0; i < 13; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(32)
    })
  })

  describe('#reset', function () {
    it('resets the temperature to 20 degrees', function () {
      thermostat.up()
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
    })
  })

  describe('#energyUsage', function () {
    it('when temp < 18, returns low-usage', function () {
      for (var i = 0; i < 3; i++) {
        thermostat.down()
      }
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })

    it('when temp < 25, returns medium-usage', function () {
      expect(thermostat.energyUsage()).toEqual('medium-usage')
    })

    it('when temp >= 25, returns high-usage', function () {
      for (var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.energyUsage()).toEqual('high-usage')
    })
  })
})
