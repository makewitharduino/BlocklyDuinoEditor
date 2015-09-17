function setCharacter() {
  $('#category_initializes').attr('name',Blockly.Msg.CATEGORY_INITIALIZES);
  $('#category_inout').attr('name',Blockly.Msg.CATEGORY_INOUT);
  $('#category_digital').attr('name',Blockly.Msg.CATEGORY_DIGITAL);
  $('#category_analog').attr('name',Blockly.Msg.CATEGORY_ANALOG);
  $('#category_others').attr('name',Blockly.Msg.CATEGORY_OTHERS);
  $('#category_ethernet').attr('name',Blockly.Msg.CATEGORY_ETHERNET);
  $('#category_ethernet_init').attr('name',Blockly.Msg.CATEGORY_ETHERNET_INIT);
  $('#category_ethernet_client').attr('name',Blockly.Msg.CATEGORY_ETHERNET_CLIENT);
  $('#category_cloud_service').attr('name',Blockly.Msg.CATEGORY_CLOUD_SERVICE);
  $('#category_ifttt').attr('name',Blockly.Msg.CATEGORY_IFTTT);
  $('#category_m2x').attr('name',Blockly.Msg.CATEGORY_M2X);
  $('#category_blynk').attr('name',Blockly.Msg.CATEGORY_BYLNK);
  $('#category_serial').attr('name',Blockly.Msg.CATEGORY_SERIAL);
  $('#category_servo').attr('name',Blockly.Msg.CATEGORY_SERVO);
  $('#category_logic').attr('name',Blockly.Msg.CATEGORY_LOGIC);
  $('#category_ultrasonic').attr('name',Blockly.Msg.CATEGORY_ULTRA_SONIC);
  $('#category_lcd').attr('name',Blockly.Msg.CATEGORY_LCD);
  $('#category_lcd_rgb').attr('name',Blockly.Msg.CATEGORY_GROVE_LCD_RGB);
  $('#category_grove_input').attr('name',Blockly.Msg.CATEGORY_GROVE_INPUT);
  $('#category_grove_output').attr('name',Blockly.Msg.CATEGORY_GROVE_OUTPUT);
  $('#category_grove_sensor').attr('name',Blockly.Msg.CATEGORY_GROVE_SENSOR);
  $('#category_adafruit').attr('name',Blockly.Msg.CATEGORY_ADAFRUIT);
  $('#category_rgbled').attr('name',Blockly.Msg.CATEGORY_RGBLED);
  $('#category_i2c_matrix').attr('name',Blockly.Msg.CATEGORY_I2C_MATRIX);
  $('#category_i2c_sevenseg').attr('name',Blockly.Msg.CATEGORY_I2C_SEVENSEG);
  $('#category_other_sensor').attr('name',Blockly.Msg.CATEGORY_OTHER_SENSOR);
  $('#category_loops').attr('name',Blockly.Msg.CATEGORY_LOOPS);
  $('#category_time').attr('name',Blockly.Msg.CATEGORY_TIME);
  $('#category_array').attr('name',Blockly.Msg.CATEGORY_ARRAY);
  $('#category_math').attr('name',Blockly.Msg.CATEGORY_MATH);
  $('#category_text').attr('name',Blockly.Msg.CATEGORY_TEXT);
  $('#category_variables').attr('name',Blockly.Msg.CATEGORY_VARIABLES);
  $('#category_functions').attr('name',Blockly.Msg.CATEGORY_FUNCTIONS);
  //  $('#category_involt').attr('name',Blockly.Msg.CATEGORY_INVOLT);

  $("#tab_blocks").text(Blockly.Msg.BLOCKS);
  $("#tab_arduino").text(Blockly.Msg.ARDUINO);

  $("#get-app").attr("data-tooltip",Blockly.Msg.DOWNLOAD_CHROME_APP);
  $("#go-to-sample").attr("data-tooltip",Blockly.Msg.GO_TO_SAMPLE);
  $("#change-lang").attr("data-tooltip",Blockly.Msg.CHANGE_LANG);
  $("#dialog-lang-title").text(Blockly.Msg.DIALOG_LANG_TITLE);

  $("#copy-button").attr("data-tooltip",Blockly.Msg.COPY_BUTTON);
  $("#discard").attr("data-tooltip",Blockly.Msg.DISCARD);
  $("#save").attr("data-tooltip",Blockly.Msg.SAVE_XML);
  $("#fakeload").attr("data-tooltip",Blockly.Msg.LOAD_XML);
}
