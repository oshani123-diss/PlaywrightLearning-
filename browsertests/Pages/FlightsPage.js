class FlightsPage {

  constructor(page) {
    this.page = page;
    this.flightsLink = page.getByRole('link', { name: 'Flights' });
    this.fromPort = page.locator('select[name="fromPort"]');
    this.toPort = page.locator('select[name="toPort"]');
    this.submitBtn = page.locator('input[name="findFlights"]');
  }

  async goto() {
    await this.flightsLink.click();
  }

  async searchFlight(from, to) {
    await this.fromPort.selectOption(from);
    await this.toPort.selectOption(to);
    await this.submitBtn.click();
  }

}

module.exports = { FlightsPage };