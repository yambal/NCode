declare type ncode = {
  blockName: string
  unitName: string
  ewMeshName: string
  nsMeshName: string
}

declare const JPNCode: {
  getNCode(lat: number, lng:number):ncode | null
}

export default JPNCode;