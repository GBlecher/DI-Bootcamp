function validateUnionType(value: any, allowedType:string[]): boolean{
    for( const type of allowedType)
    {
      if (typeof value == type)
        return true
    }
    return false
  }
  
  const allowedType: string[]= ['string', 'number']
  
  
  console.log(validateUnionType({},allowedType));
  console.log(validateUnionType("",allowedType));
  