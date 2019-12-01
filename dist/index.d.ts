declare type ncode = {
  blockName: string
  unitName: string
  ewMeshName: string
  nsMeshName: string
}

declare const NCode: {
  getNCode(lat: number, lng:number):ncode | null
}

export default NCode;