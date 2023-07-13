interface IDataContext {
  data: IDataForms
  setValues: (data: StepsFormType) => void
}

interface IDataForms extends IStepOneForms, IStepTwoForms, IStepThreeForms{
  firstName: string
  lastName: string
  email: string
  hasPhone: boolean
  phoneNumber?: string
  acceptedFiles: File[]
}
type StepsFormType = IStepTwoForms | IStepOneForms | IStepThreeForms

interface IStepOneForms {
  firstName: string
  lastName: string
}

interface IStepTwoForms {
  email: string
  hasPhone: boolean
  phoneNumber?: string
}

interface IStepThreeForms {
  acceptedFiles: File[]
}
