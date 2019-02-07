$( document ).ready(function() {
  let thermostat = new Thermostat();

  function refreshData() {
    $('#temperature').text(thermostat.temperature);
    $('#energy-usage').text(thermostat.energyUsage());
  }

  refreshData();

  $( '#up' ).click(function( event ) {
    thermostat.up();
    refreshData();
  })

  $( '#down' ).click(function( event ) {
    thermostat.down();
    refreshData();
  })

  $( '#reset' ).click(function( event ) {
    thermostat.reset();
    refreshData();
  })

  $( '#powersaving-on' ).click(function( event ) {
    thermostat.turnPowerSavingOn();
    $('#power-saving-status').text('ON');
    refreshData();
  })

  $( '#powersaving-off' ).click(function( event ) {
    thermostat.turnPowerSavingOff();
    $('#power-saving-status').text('OFF');
    refreshData();
  })
});
