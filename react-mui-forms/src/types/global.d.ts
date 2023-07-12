interface IDataContext {
  data: IDataForms
  setValues: (data: StepsFormType) => void
}

interface IDataForms extends IStepOneForms, IStepTwoForms{
  firstName: string
  lastName: string
  email: string
  hasPhone: boolean
  phoneNumber?: string
}
type StepsFormType = IStepTwoForms | IStepOneForms

interface IStepOneForms {
  firstName: string
  lastName: string
}

interface IStepTwoForms {
  email: string
  hasPhone: boolean
  phoneNumber?: string
}
