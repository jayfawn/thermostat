describe('Thermostat', function () {
  beforeEach(function () {
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees', function () {
    expect(thermostat.temperature).toEqual(20)
  })

  it('increases in temperature', function () {
    thermostat.up(2)
    expect(thermostat.temperature).toEqual(22)
  })

  it('decreases in temperature', function() {
    thermostat.down(2)
    expect(thermostat.temperature).toEqual(18)
  })

  it('cannot go lower than 10 degrees', function () {
    thermostat.down(15)
    expect(thermostat.temperature).toEqual(10)
  })

  it('has a power saving mode', function () {
    expect(thermostat.powerSaving).toEqual(true)
  })

  it('when power saving is on, cannot go above 25 degrees', function () {
    thermostat.up(7)
    expect(thermostat.temperature).toEqual(25)
  })

  it('when power saving is off, cannot go above 32 degrees', function () {
    thermostat.switchPowerSaving()
    thermostat.up(15)
    expect(thermostat.temperature).toEqual(32)
  })

  it('resets the temperature to 20 degrees', function () {
    thermostat.up(5)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(20)
  })
})
