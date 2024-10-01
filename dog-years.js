function dogYears(name, age) {
    planet = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    }
    ageSec = 31557600
    ageYrs = age / ageSec
    if (planet[name]) {
        let planetYrs = ageYrs / planet[name]
        let dogYrs = planetYrs * 7;
        return parseFloat(dogYrs.toFixed(2))
    }
}