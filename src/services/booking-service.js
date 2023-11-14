const axios = require("axios");

const { BookingRepository } = require("../repositories");

const { ServerConfig } = require("../config");

const db = require("../models");

async function createBooking(data) {
  try {
    const flight = await axios.get(
      `${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`
    );
    console.log(flight);

    return true;
  } catch (error) {
    throw error;
  }
}

module.exports = { createBooking };
