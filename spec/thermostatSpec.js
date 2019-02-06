describe('Thermostat', function () {
  beforeEach(function () {
    thermostat = new Thermostat();
  }

  )
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
})
