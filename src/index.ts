const NCode = {
  getNCode: (lat: number, lng: number):string => {
    return lat + ',' + lng
  }
}

module.exports = NCode;